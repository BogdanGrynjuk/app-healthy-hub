import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { MONTH_NAME } from 'constants/monthName.js';

import {
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  Chart,
  ChartLabelBlock,
  ChartLabelContent,
} from './ScaleLineCharts.styled.jsx';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { selectStatisticInfo } from 'redux/Stats/statsSelectors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ isYearData, type }) => {
  const [time, setTime] = useState([]);
  const [information, setInformation] = useState([]);
  const [average, setAverage] = useState(0);

  const info = useSelector(selectStatisticInfo);

  useEffect(() => {
    if (!info || Object.keys(info).length === 0) {
      return;
    }

    const infoArray = [];
    const timesArray = [];
    const statistic = info[type] || [];

    statistic.forEach(item => {
      const formattedDate = isYearData
        ? MONTH_NAME.SHORT[item._id.month]
        : `${item._id.day}`;

      const value = isYearData ? Math.round(item.avgMonth) : item[type];

      timesArray.push(formattedDate);
      infoArray.push(value);
    });

    const total =
      infoArray.length > 0
        ? Math.round(
            infoArray.reduce((prev, curr) => prev + curr, 0) / infoArray.length
          )
        : 0;

    if (infoArray.length === 0) {
      const currentDate = new Date().getUTCDate();
      const currentMonth = new Date().getUTCMonth() + 1;
      timesArray.push(
        isYearData ? MONTH_NAME.SHORT[currentMonth] : currentDate
      );
      infoArray.push(0);
    }

    setAverage(total);
    setInformation(infoArray);
    setTime(timesArray);
  }, [info, isYearData, type]);

  let caption = type === 'water' ? 'L' : 'K';
  const yScaleMax = Math.max(...information) + 1000;

  const options = {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: context => {
          const { chart, tooltip } = context;
          let tooltipEl = chart.canvas.parentNode.querySelector('div');
          let tooltipTitle = chart.canvas.parentNode.querySelector('#value');
          const tabletMediaQuery = window.matchMedia(
            '(min-width: 768px) and (max-width: 1439px)'
          );

          if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }
          const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
          const tooltipWidth = tooltipEl.offsetWidth;
          const tooltipHeight = tooltipEl.offsetHeight;
          const caretX = tooltip.caretX;
          const caretY = tooltip.caretY;

          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = tabletMediaQuery.matches
            ? positionX + caretX + 'px'
            : positionX + caretX - tooltipWidth / 2 + 'px';
          tooltipEl.style.top = positionY + caretY - tooltipHeight - 10 + 'px';
          tooltipEl.style.backgroundColor = 'rgb(15, 15, 15)';
          tooltipTitle.textContent =
            context.tooltip.dataPoints[0].formattedValue;
        },
      },
    },
    indexAxis: 'x',
    scales: {
      x: {
        alignToPixels: true,
        beginAtZero: false,
        offset: true,
        ticks: {
          color: '#B6B6B6',
          padding: 6,
          font: {
            family: 'Poppins',
            size: 10,
          },
        },
        grid: {
          color: '#292928',
        },
      },
      y: {
        alignToPixels: true,
        beginAtZero: true,
        min: 0,
        max: yScaleMax,
        ticks: {
          alignToPixels: true,
          major: {
            enabled: true,
          },
          color: '#B6B6B6',
          stepSize: 1000,
          callback: function (value) {
            if (String(value).length === 1) {
              return value;
            }
            return String(value).slice(0, 1) + `${caption}`;
          },
          padding: 8,
          font: {
            family: 'Poppins',
            size: 10,
          },
        },
        border: {
          display: false,
        },
        grid: {
          color: '#292928',
        },
      },
    },
  };

  const data = {
    labels: time,
    datasets: [
      {
        data: information,
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverBackgroundColor: '#E3FFA8',
        hitRadius: 5,
        pointHoverRadius: 5,
        tension: 0.5,
        drawActiveElementsOnTop: true,
      },
    ],
  };

  return (
    <>
      <TitleContainer>
        <ChartsTitle>{type === 'water' ? 'Water' : 'Calories'}</ChartsTitle>
        <ChartsSubtitle>
          Average value:{' '}
          <ChartsCaption>
            {average} {type === 'water' ? 'ml' : 'cal'}
          </ChartsCaption>
        </ChartsSubtitle>
      </TitleContainer>
      <Chart>
        <Line options={options} data={data} />
        <ChartLabelBlock>
          <ChartLabelContent>
            <p id="value"></p>
            <span>{type === 'water' ? 'milliliters' : 'calories'}</span>
          </ChartLabelContent>
        </ChartLabelBlock>
      </Chart>
    </>
  );
};

LineChart.propTypes = {
  isYearData: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default LineChart;
