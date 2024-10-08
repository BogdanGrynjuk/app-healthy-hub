import PropTypes from 'prop-types';
import SecondaryDoughnutChart from 'components/Charts/SecondaryDoughnutChart';
import {
  Wrapper,
  ChartBox,
  TextBox,
  Title,
  Counter,
  CounterList,
  CounterValue,
} from './NutrientInfoCard.styled';

const NutrientInfoCard = ({ title, nutrient, colorDoughnutChart }) => {
  const { consumptionGoal, remainingAmount, excessAmount, isGoalExceeded } =
    nutrient;

  return (
    <Wrapper>
      <ChartBox>
        <SecondaryDoughnutChart
          nameNutrient={title}
          nutrient={nutrient}
          colorDoughnutChart={colorDoughnutChart}
        />
      </ChartBox>
      <TextBox>
        <Title>{title}</Title>
        <CounterList>
          <Counter>
            Goal: <CounterValue>{consumptionGoal}</CounterValue>
          </Counter>
          <Counter>
            {isGoalExceeded ? 'excess:' : 'left:'}{' '}
            <CounterValue $isGoalExceeded={isGoalExceeded}>
              {isGoalExceeded ? excessAmount : remainingAmount}
            </CounterValue>
          </Counter>
        </CounterList>
      </TextBox>
    </Wrapper>
  );
};

NutrientInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  nutrient: PropTypes.shape({
    consumptionGoal: PropTypes.number.isRequired,
    remainingAmount: PropTypes.number.isRequired,
    excessAmount: PropTypes.number.isRequired,
    isGoalExceeded: PropTypes.bool.isRequired,
  }).isRequired,
  colorDoughnutChart: PropTypes.string.isRequired,
};

export default NutrientInfoCard;
