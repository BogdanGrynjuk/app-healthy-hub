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
import ModalRecordDiary from 'components/Modals/ModalRecordDiary';

const MealDetail = ({ imageSrc, info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { mealType, carbonohidrates, protein, fat } = info;

  return (
    <Container>
      <TitleWrap>
        <DiaryImage src={imageSrc} alt={`image of ${mealType}`} />
        <Title>{mealType}</Title>
      </TitleWrap>
      {carbonohidrates !== 0 || protein !== 0 || fat !== 0 ? (
        <InfoBox>
          <Carbohydrates>
            Carbohydrates: <Value>{carbonohidrates}</Value>
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
        <ModalRecordDiary
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
    carbonohidrates: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
  }).isRequired,
};

export default MealDetail;
