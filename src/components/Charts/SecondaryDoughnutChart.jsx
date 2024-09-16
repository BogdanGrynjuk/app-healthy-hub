import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import toastifyMessage from 'helpers/toastify';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SecondaryDoughnutChart = ({
  nameNutrient,
  nutrient,
  colorDoughnutChart,
}) => {
  const hasNotified = useRef(false);

  const {
    consumedAmount,
    remainingAmount,
    consumptionPercentage,
    isGoalExceeded,
  } = nutrient;

  const data = {
    datasets: [
      {
        data: [consumedAmount, remainingAmount >= 0 ? remainingAmount : 0],
        backgroundColor: [
          `${isGoalExceeded ? '#E74A3B' : colorDoughnutChart}`,
          '#292928',
        ],
        borderRadius: `${remainingAmount > 0 ? 12 : 0}`,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const xCoord = chart.getDatasetMeta(0).data[0].x;
      const yCoord = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `400 12px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText(consumptionPercentage + '%', xCoord, yCoord);
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

  useEffect(() => {
    if (isGoalExceeded && !hasNotified.current) {
      toastifyMessage(
        'warn',
        `Maximum ${nameNutrient.toLowerCase()} consumption. If you continue to consume, you will not reach your goal`
      );
      hasNotified.current = true;
    }
  }, [isGoalExceeded, nameNutrient]);

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter, backgroundCircle]}
    />
  );
};

SecondaryDoughnutChart.propTypes = {
  nameNutrient: PropTypes.string.isRequired,
  nutrient: PropTypes.shape({
    consumedAmount: PropTypes.number.isRequired,
    remainingAmount: PropTypes.number.isRequired,
    consumptionPercentage: PropTypes.number.isRequired,
    isGoalExceeded: PropTypes.bool.isRequired,
  }).isRequired,
  colorDoughnutChart: PropTypes.string.isRequired,
};

export default SecondaryDoughnutChart;
