import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import toastifyMessage from 'helpers/toastify';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotifications } from 'redux/FoodIntake/foodIntakeSelectors';
import { setNotification } from 'redux/FoodIntake/foodIntakeSlice';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainDoughnutChart = ({ nameNutrient, nutrient, colorDoughnutChart }) => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);

  const { consumedAmount, excessAmount, remainingAmount, isGoalExceeded } =
    nutrient;

  const data = {
    labels: [`${!isGoalExceeded ? 'Consumed:' : 'Excess:'}`, 'Left:'],
    datasets: [
      {
        data: [consumedAmount, remainingAmount >= 0 ? remainingAmount : 0],
        backgroundColor: [
          `${isGoalExceeded ? '#E74A3B' : colorDoughnutChart}`,
          '#292928',
        ],
        borderColor: ['rgba(69, 255, 188, 0)'],
        borderRadius: `${remainingAmount > 0 ? 12 : 0}`,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${isGoalExceeded ? excessAmount : value}`;
          },
        },
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;
      const xCoord = chart.getDatasetMeta(0).data[0].x;
      const yCoord = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `500 32px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = `${isGoalExceeded ? '#E74A3B' : '#FFFFFF'}`;
      ctx.fillText(data.datasets[0].data[0], xCoord, yCoord - 5);

      ctx.font = `400 14px sans-serif`;
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText('calories', xCoord, yCoord + 20);
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      const xCoord = chart.getDatasetMeta(0).data[0].x;
      const yCoord = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = 'rgba(41, 41, 40, 1)';
      ctx.arc(xCoord, yCoord, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  const formattedNameNutrient = nameNutrient.toLowerCase();

  useEffect(() => {
    if (isGoalExceeded && !notifications[formattedNameNutrient]) {
      toastifyMessage(
        'warn',
        `Maximum ${formattedNameNutrient} consumption. If you continue to consume, you will not reach your goal`
      );
      dispatch(setNotification({ type: formattedNameNutrient, value: true }));
    }
  }, [dispatch, isGoalExceeded, formattedNameNutrient, notifications]);

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter, backgroundCircle]}
    />
  );
};

MainDoughnutChart.propTypes = {
  nameNutrient: PropTypes.string.isRequired,
  nutrient: PropTypes.shape({
    consumedAmount: PropTypes.number.isRequired,
    remainingAmount: PropTypes.number.isRequired,
    isGoalExceeded: PropTypes.bool.isRequired,
  }).isRequired,
  colorDoughnutChart: PropTypes.string.isRequired,
};

export default MainDoughnutChart;
