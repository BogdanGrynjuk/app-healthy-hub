import { useEffect, useRef } from 'react';
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
  const renderedMeals = getArrayToRenderDiary(meals, mealType);
  const lastElementRef = useRef(null);
  const prevRenderedMealsLength = useRef(renderedMeals.length);

  useEffect(() => {
    if (renderedMeals.length > prevRenderedMealsLength.current) {
      if (lastElementRef.current) {
        lastElementRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
    prevRenderedMealsLength.current = renderedMeals.length;
  }, [renderedMeals.length]);

  return (
    <Container>
      <FoodList>
        {renderedMeals.map((mealDetails, index) => {
          const isLastElement = index === renderedMeals.length - 1;
          return (
            <FoodItem
              key={nanoid()}
              ref={isLastElement ? lastElementRef : null}
            >
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
