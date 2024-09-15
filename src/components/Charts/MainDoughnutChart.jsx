import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import toastifyMessage from 'helpers/toastify';
import { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainDoughnutChart = ({ nameNutrient, nutrient, colorDoughnutChart }) => {
  const { consumedAmount, remainingAmount, isGoalExceeded } = nutrient;
  const hasNotified = useRef(false);

  useEffect(() => {
    if (isGoalExceeded && !hasNotified.current) {
      toastifyMessage(
        'warn',
        `Maximum ${nameNutrient.toLowerCase()} consumption. If you continue to consume, you will not reach your goal`
      );
      hasNotified.current = true;
    }
  }, [isGoalExceeded, nameNutrient]);

  const data = {
    labels: ['Consumed:', 'Left:'],
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

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter, backgroundCircle]}
    />
  );
};

export default MainDoughnutChart;
