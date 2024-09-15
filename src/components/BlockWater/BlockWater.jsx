import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

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
import {
  selectConsumedWaterAmount,
  selectExceededWaterLimit,
  selectWaterConsumptionPercentage,
  selectWaterExcess,
  selectWaterRemainingToGoal,
} from 'redux/FoodIntake/foodIntakeSelectors';
import { outNum } from 'helpers/outNum';
import toastifyMessage from 'helpers/toastify';

const BlockWater = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chartRef = useRef(null);
  const counterRef = useRef(null);
  const hasNotified = useRef(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const consumedWaterMl = useSelector(selectConsumedWaterAmount);
  const waterConsumptionPercentage = useSelector(
    selectWaterConsumptionPercentage
  );
  const waterRemainingToGoal = useSelector(selectWaterRemainingToGoal);
  const waterExcess = useSelector(selectWaterExcess);
  const exceededWaterLimit = useSelector(selectExceededWaterLimit);

  useEffect(() => {
    if (chartRef.current) {
      setTimeout(() => {
        chartRef.current.style.height = waterConsumptionPercentage;
      }, 0);
    }
  }, [consumedWaterMl, waterConsumptionPercentage]);

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
              <CounterOfConsumedWaterInPercentage $warning={exceededWaterLimit}>
                {waterConsumptionPercentage}
              </CounterOfConsumedWaterInPercentage>
              <Chart ref={chartRef} $warning={exceededWaterLimit} />
            </WaterTracker>
            <CardText>
              <CardTitle>Water consumption</CardTitle>
              <CounterList>
                <CounterOfConsumedWaterInMl>
                  <span ref={counterRef}>{consumedWaterMl}</span>
                  ml
                </CounterOfConsumedWaterInMl>
                <CounterOfWaterLeftToDrinkInMl $warning={exceededWaterLimit}>
                  <span>{exceededWaterLimit ? 'excess:' : 'left:'}</span>{' '}
                  {exceededWaterLimit ? waterExcess : waterRemainingToGoal} ml
                </CounterOfWaterLeftToDrinkInMl>
              </CounterList>
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
