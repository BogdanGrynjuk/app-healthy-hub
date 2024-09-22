import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectStatisticInfo } from 'redux/Stats/statsSelectors';
import { MONTH_NAME } from '../../constants/monthName';
import {
  List,
  Item,
  WeightTitle,
  DataTitle,
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  Scale,
} from './ScaleLineCharts.styled';

const ScaleChart = ({ isYearData }) => {
  const [weight, setWeight] = useState([]);
  const [average, setAverage] = useState(0);
  const info = useSelector(selectStatisticInfo);

  useEffect(() => {
    if (!info || Object.keys(info).length === 0) return;

    const weightData = info.weight || [];

    const weightArray = [];
    const valueArray = [];

    weightData.forEach(item => {
      if (!isYearData) {
        const { _id, weight } = item;
        const formattedDate = `${_id.day}`;

        weightArray.push({ _id: formattedDate, amount: weight });
        valueArray.push(weight);
      } else {
        const { _id, avgMonth } = item;
        if (avgMonth !== undefined) {
          const formattedDate = MONTH_NAME.FULL[_id.month];
          weightArray.push({ _id: formattedDate, amount: avgMonth });
          valueArray.push(avgMonth);
        }
      }
    });

    if (valueArray.length > 0) {
      const total = Math.round(
        valueArray.reduce((prev, curr) => prev + curr, 0) / valueArray.length
      );
      setAverage(total);
    }

    setWeight(weightArray);
  }, [isYearData, info]);

  return (
    <>
      <TitleContainer>
        <ChartsTitle>Weight</ChartsTitle>
        <ChartsSubtitle>
          Average value: <ChartsCaption>{average} kg</ChartsCaption>
        </ChartsSubtitle>
      </TitleContainer>
      <Scale>
        <List>
          {weight.map(({ _id, amount }) => (
            <Item key={`${_id}+${amount}`}>
              <WeightTitle>{amount} kg</WeightTitle>
              <DataTitle>{_id}</DataTitle>
            </Item>
          ))}
        </List>
      </Scale>
    </>
  );
};

ScaleChart.propTypes = {
  isYearData: PropTypes.bool.isRequired,
};

export default ScaleChart;
