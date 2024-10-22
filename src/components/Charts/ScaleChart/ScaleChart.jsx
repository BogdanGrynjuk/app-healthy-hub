import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectStatisticInfo } from 'redux/Statistic/statsSelectors';
import { MONTH_NAME } from 'constants/monthName';
import {
  Chart,
  ChartContainer,
  ChartTitle,
  Item,
  ItemDate,
  ItemValue,
  MetricValue,
  ScrollWrapper,
  TitleContainer,
  ValueDisplay,
} from './ScaleChart.styled';

const ScaleChart = ({ isYearData }) => {
  const [weight, setWeight] = useState([]);
  const [averageWeightValue, setAverageWeightValue] = useState(0);
  const info = useSelector(selectStatisticInfo);

  useEffect(() => {
    if (!info || Object.keys(info).length === 0) return;

    const weightData = info.weight || [];

    const weightArray = [];
    const valueArray = [];

    weightData.forEach(item => {
      if (!isYearData) {
        const { _id, weight } = item;

        if (_id && weight !== undefined) {
          const formattedDate = `${_id.day}`;
          weightArray.push({ _id: formattedDate, amount: weight.toFixed(1) });
          valueArray.push(weight);
        }
      } else {
        const { _id, avgMonth } = item;

        if (_id && avgMonth !== undefined) {
          const formattedDate = MONTH_NAME.FULL[_id.month];
          const formattedAvgMonth = parseFloat(avgMonth.toFixed(1));
          weightArray.push({ _id: formattedDate, amount: formattedAvgMonth });
          valueArray.push(formattedAvgMonth);
        }
      }
    });

    if (valueArray.length > 0) {
      const averageValue = parseFloat(
        (
          valueArray.reduce((prev, curr) => prev + curr, 0) / valueArray.length
        ).toFixed(1)
      );
      setAverageWeightValue(averageValue);
    }

    setWeight(weightArray);
  }, [isYearData, info]);

  return (
    <Chart>
      <TitleContainer>
        <ChartTitle>Weight</ChartTitle>
        <ValueDisplay>
          Average value: <MetricValue>{averageWeightValue} kg</MetricValue>
        </ValueDisplay>
      </TitleContainer>
      <ScrollWrapper>
        <ChartContainer>
          {weight.map(({ _id, amount }) => (
            <Item key={`${_id} ${amount}`}>
              <ItemValue>{amount}</ItemValue>
              <ItemDate>{_id}</ItemDate>
            </Item>
          ))}
        </ChartContainer>
      </ScrollWrapper>
    </Chart>
  );
};

ScaleChart.propTypes = {
  isYearData: PropTypes.bool.isRequired,
};

export default ScaleChart;
