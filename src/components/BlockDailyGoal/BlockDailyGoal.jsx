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

import img1 from 'images/bubble.png';
import img2 from 'images/bubble@2x.png';
import img3 from 'images/bottle.png';
import img4 from 'images/bottle@2x.png';
import { selectDailyWaterGoal } from 'redux/foodIntake/foodIntakeSelectors';

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
          <img
            srcSet={`${img1} 1x, ${img2} 2x`}
            width={80}
            height={80}
            src={img1}
            alt="Bubbles"
          />
          <CardText>
            <CardTitle>Calories</CardTitle>
            <Counter ref={calorieCounterRef} />
          </CardText>
        </Card>
        <Card>
          <img
            srcSet={`${img3} 1x, ${img4} 2x`}
            width={80}
            height={80}
            src={img3}
            alt="Bottle"
          />
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
