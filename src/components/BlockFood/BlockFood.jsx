import { useSelector } from 'react-redux';
import { selectFoodStatistics } from 'redux/foodIntake/foodIntakeSelectors';

import {
  Wrapper,
  Title,
  InfoBox,
  MainChartBox,
  CardList,
  Card,
  ChartBox,
  CardText,
  CardTitle,
  CounterList,
  Counter,
} from './BlockFood.styled';

import { calcRemainder, calcSurplus } from 'helpers/calculations';
import MainDoughnutChart from 'components/Charts/MainDoughnutChart';
import SecondaryDoughnutChart from 'components/Charts/SecondaryDoughnutChart';

const MacroCard = ({ title, goal, consumed, doughnutChart }) => {
  const leftConsumed = calcRemainder(goal, consumed);
  const excessConsumption = calcSurplus(goal, consumed);
  const exceededLimit = consumed > goal;

  return (
    <Card>
      <ChartBox>{doughnutChart}</ChartBox>
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CounterList>
          <Counter>
            Goal: <span>{goal}</span>
          </Counter>
          <Counter>
            {exceededLimit ? 'excess:' : 'left:'}{' '}
            <span style={{ color: exceededLimit ? '#E74A3B' : 'inherit' }}>
              {exceededLimit ? excessConsumption : leftConsumed}
            </span>
          </Counter>
        </CounterList>
      </CardText>
    </Card>
  );
};

const BlockFood = () => {
  const { Calories, Carbohydrates, Fat, Protein } =
    useSelector(selectFoodStatistics);

  return (
    <Wrapper>
      <Title>Food</Title>
      <InfoBox>
        <MainChartBox>
          <MainDoughnutChart
            consumed={Calories.consumed}
            goal={Calories.goal}
          />
        </MainChartBox>
        <CardList>
          <MacroCard
            title="Carbohydrates"
            goal={Carbohydrates.goal}
            consumed={Carbohydrates.consumed}
            doughnutChart={
              <SecondaryDoughnutChart
                color={'#FFC4F7'}
                goal={Protein.goal}
                consumed={Protein.consumed}
              />
            }
          />
          <MacroCard
            title="Protein"
            goal={Protein.goal}
            consumed={Protein.consumed}
            doughnutChart={
              <SecondaryDoughnutChart
                color={'#FFF3B7'}
                goal={Protein.goal}
                consumed={Protein.consumed}
              />
            }
          />
          <MacroCard
            title="Fat"
            goal={Fat.goal}
            consumed={Fat.consumed}
            doughnutChart={
              <SecondaryDoughnutChart
                color={'#B6B6B6'}
                goal={Protein.goal}
                consumed={Protein.consumed}
              />
            }
          />
        </CardList>
      </InfoBox>
    </Wrapper>
  );
};

export default BlockFood;
