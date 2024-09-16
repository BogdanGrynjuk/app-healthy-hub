import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  AddButton,
  Title,
  Value,
  DiaryImage,
  TitleWrap,
  Container,
  InfoBox,
  Carbohydrates,
  Protein,
  Fat,
} from './BlockMealDetail.styled';
import RecordDiaryModal from 'components/Modals/RecordDiaryModal';

const MealDetail = ({ imageSrc, info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { mealType, carbohydrates, protein, fat } = info;

  return (
    <Container>
      <TitleWrap>
        <DiaryImage src={imageSrc} alt={`image of ${mealType}`} />
        <Title>{mealType}</Title>
      </TitleWrap>
      {carbohydrates !== 0 || protein !== 0 || fat !== 0 ? (
        <InfoBox>
          <Carbohydrates>
            Carbohydrates: <Value>{carbohydrates}</Value>
          </Carbohydrates>
          <Protein>
            Protein: <Value>{protein}</Value>
          </Protein>
          <Fat>
            Fat: <Value>{fat}</Value>
          </Fat>
        </InfoBox>
      ) : (
        <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      )}

      {isModalOpen && (
        <RecordDiaryModal
          onClose={toggleModal}
          image={imageSrc}
          mealType={mealType}
        />
      )}
    </Container>
  );
};

MealDetail.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  info: PropTypes.shape({
    mealType: PropTypes.string.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
  }).isRequired,
};

export default MealDetail;
