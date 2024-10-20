import { useSelector } from 'react-redux';
import { selectFoodStatistics } from 'redux/FoodIntake/foodIntakeSelectors';

import {
  Wrapper,
  Title,
  InfoBox,
  ChartBox,
  NutrientList,
} from './BlockFood.styled';

import MainDoughnutChart from 'components/Charts/MainDoughnutChart';
import NutrientInfoCard from 'components/NutrientInfoCard';

const BlockFood = () => {
  const { Calories, Carbohydrates, Fat, Protein } =
    useSelector(selectFoodStatistics);

  return (
    <Wrapper>
      <Title>Food</Title>
      <InfoBox>
        <ChartBox>
          <MainDoughnutChart
            nameNutrient="Calories"
            nutrient={Calories}
            colorDoughnutChart={'#45FFBC'}
          />
        </ChartBox>
        <NutrientList>
          <NutrientInfoCard
            title="Carbohydrates"
            nutrient={Carbohydrates}
            colorDoughnutChart={'#FFC4F7'}
          />
          <NutrientInfoCard
            title="Protein"
            nutrient={Protein}
            colorDoughnutChart={'#FFF3B7'}
          />
          <NutrientInfoCard
            title="Fat"
            nutrient={Fat}
            colorDoughnutChart={'#B6B6B6'}
          />
        </NutrientList>
      </InfoBox>
    </Wrapper>
  );
};

export default BlockFood;
