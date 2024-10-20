import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';

import { outNum } from 'helpers/outNum';

import {
  Wrapper,
  Title,
  InfoBox,
  Card,
  CardText,
  CardTitle,
  Counter,
} from './BlockDailyGoal.styled';

import bubble from 'images/icons/bubble.svg';
import bottle from 'images/icons/bottle.svg';
import { selectDailyWaterGoal } from 'redux/TempFoodIntake/foodIntakeSelectors';

const BlockDailyGoal = () => {
  const dailyWaterGoal = useSelector(selectDailyWaterGoal);
  const userInfo = useSelector(selectUser);
  const caloriesGoal = userInfo.BMR;

  const calorieCounterRef = useRef(null);
  const waterCounterRef = useRef(null);

  useEffect(() => {
    if (calorieCounterRef.current) {
      outNum(caloriesGoal, calorieCounterRef.current);
    }
  }, [caloriesGoal]);

  useEffect(() => {
    if (waterCounterRef.current) {
      outNum(dailyWaterGoal, waterCounterRef.current);
    }
  }, [dailyWaterGoal]);

  return (
    <Wrapper>
      <Title>Daily goal</Title>
      <InfoBox>
        <Card>
          <img src={bubble} width={80} height={80} alt="Bubbles" />
          <CardText>
            <CardTitle>Calories</CardTitle>
            <Counter ref={calorieCounterRef} />
          </CardText>
        </Card>
        <Card>
          <img width={80} height={80} src={bottle} alt="Bottle" />
          <CardText>
            <CardTitle>Water</CardTitle>
            <Counter>
              <span ref={waterCounterRef}></span>
              <span>ml</span>
            </Counter>
          </CardText>
        </Card>
      </InfoBox>
    </Wrapper>
  );
};

export default BlockDailyGoal;
