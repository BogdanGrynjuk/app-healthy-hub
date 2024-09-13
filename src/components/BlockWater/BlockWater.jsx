import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { calcPercent, calcRemainder, calcSurplus } from 'helpers/calculations';
import { WATER_GOAL } from 'constants/constants';

import {
  Wrapper,
  Title,
  InfoBox,
  Card,
  WaterTracker,
  CounterOfConsumedWaterInPercentage,
  Chart,
  CardText,
  CardTitle,
  CounterList,
  CounterOfConsumedWaterInMl,
  CounterOfWaterLeftToDrinkInMl,
  Btn,
} from './BlockWater.styled';

import AddWater from 'components/Modals/AddWater/addWater';

import img1 from 'images/add.png';
import img2 from 'images/add@2x.png';
import { selectWaterIntake } from 'redux/foodIntake/foodIntakeSelectors';
import { outNum } from 'helpers/outNum';
import toastifyMessage from 'helpers/toastify';

const BlockWater = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chartRef = useRef(null);
  const counterRef = useRef(null);
  const hasNotified = useRef(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const consumedWaterMl = useSelector(selectWaterIntake);

  const consumedWaterPercent = useMemo(
    () => calcPercent(WATER_GOAL, consumedWaterMl) + '%',
    [consumedWaterMl]
  );
  const leftToConsumeWater = useMemo(
    () => calcRemainder(WATER_GOAL, consumedWaterMl),
    [consumedWaterMl]
  );
  const excessConsumptionWater = useMemo(
    () => calcSurplus(WATER_GOAL, consumedWaterMl),
    [consumedWaterMl]
  );
  const exceededWaterLimit = useMemo(
    () => consumedWaterMl > WATER_GOAL,
    [consumedWaterMl]
  );

  useEffect(() => {
    if (chartRef.current) {
      setTimeout(() => {
        chartRef.current.style.height = consumedWaterPercent;
      }, 0);
    }
  }, [consumedWaterMl, consumedWaterPercent]);

  useEffect(() => {
    if (counterRef.current) {
      outNum(consumedWaterMl, counterRef.current);
    }
  }, [consumedWaterMl]);

  useEffect(() => {
    if (exceededWaterLimit && !hasNotified.current) {
      toastifyMessage(
        'warn',
        `Maximum water consumption. If you continue to consume, you will not reach your goal`
      );
      hasNotified.current = true;
    }
  }, [exceededWaterLimit]);

  return (
    <>
      <Wrapper>
        <Title>Water</Title>
        <InfoBox>
          <Card>
            <WaterTracker>
              {/* лічильник спожитої води у відсотках */}
              <CounterOfConsumedWaterInPercentage $warning={exceededWaterLimit}>
                {consumedWaterPercent}
              </CounterOfConsumedWaterInPercentage>
              <Chart ref={chartRef} $warning={exceededWaterLimit} />
            </WaterTracker>
            <CardText>
              <CardTitle>Water consumption</CardTitle>
              <CounterList>
                {/* лічильник випитої води у мл */}
                <CounterOfConsumedWaterInMl>
                  <span ref={counterRef}>{consumedWaterMl}</span>
                  ml
                </CounterOfConsumedWaterInMl>
                {/* лічильник води, що залишилось випити у мл */}
                <CounterOfWaterLeftToDrinkInMl $warning={exceededWaterLimit}>
                  <span>{exceededWaterLimit ? 'excess:' : 'left:'}</span>{' '}
                  {exceededWaterLimit
                    ? excessConsumptionWater
                    : leftToConsumeWater}{' '}
                  ml
                </CounterOfWaterLeftToDrinkInMl>
              </CounterList>
              {/* кнопка, що відкриває модальне вікно додати воду */}
              <Btn type="button" onClick={toggleModal}>
                <img
                  srcSet={`${img1} 1x, ${img2} 2x`}
                  width={16}
                  height={16}
                  src={img1}
                  alt="Add"
                />
                <p>Add water intake</p>
              </Btn>
            </CardText>
          </Card>
        </InfoBox>

        {isModalOpen && <AddWater onClose={toggleModal} />}
      </Wrapper>
    </>
  );
};

export default BlockWater;
