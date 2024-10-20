import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  CarbohydratesWrap,
  Container,
  FatWrap,
  HeaderWrapper,
  Img,
  Info,
  ProteinWrap,
  ThumbImg,
  Title,
  Value,
} from './BlockGeneralInfoOfDiarySection.styled';

import { selectTotalNutrientsByMealType } from 'redux/FoodIntake/foodIntakeSelectors';

const BlockGeneralInfoOfDiarySection = ({ mealType, imageSrc }) => {
  const { carbonohidrates, protein, fat } = useSelector(
    selectTotalNutrientsByMealType(mealType)
  );
  return (
    <Container>
      <HeaderWrapper>
        <ThumbImg>
          <Img src={imageSrc} alt={`image of ${mealType}`} />
        </ThumbImg>
        <Title>{mealType}</Title>
      </HeaderWrapper>

      <Info>
        <CarbohydratesWrap>
          Carbohydrates: <Value>{carbonohidrates}</Value>
        </CarbohydratesWrap>
        <ProteinWrap>
          Protein: <Value>{protein}</Value>
        </ProteinWrap>
        <FatWrap>
          Fat: <Value>{fat}</Value>
        </FatWrap>
      </Info>
    </Container>
  );
};

BlockGeneralInfoOfDiarySection.propTypes = {
  mealType: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default BlockGeneralInfoOfDiarySection;
