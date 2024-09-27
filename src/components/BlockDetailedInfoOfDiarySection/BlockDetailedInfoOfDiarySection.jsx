import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { getArrayToRenderDiary } from 'helpers/getArrayToRenderDiary';
import {
  Container,
  FoodItem,
  FoodList,
} from './BlockDetailedInfoOfDiarySection.styled';
import FoodDetails from 'components/FoodDetails';

const BlockDetailedInfoOfDiarySection = ({ mealType, meals, imageSrc }) => {
  return (
    <Container>
      <FoodList>
        {getArrayToRenderDiary(meals, mealType).map((mealDetails, index) => {
          return (
            <FoodItem key={nanoid()}>
              <FoodDetails
                mealDetails={mealDetails}
                index={index}
                img={imageSrc}
              />
            </FoodItem>
          );
        })}
      </FoodList>
    </Container>
  );
};

BlockDetailedInfoOfDiarySection.propTypes = {
  mealType: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      mealName: PropTypes.string.isRequired,
      carbonohidrates: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BlockDetailedInfoOfDiarySection;
