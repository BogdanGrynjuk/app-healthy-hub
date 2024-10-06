import PropTypes from 'prop-types';
import { useState } from 'react';
import RecordDiaryModal from 'components/Modals/ModalRecordDiary/ModalRecordDiary';

import edit from 'images/icons/edit.svg';

import {
  Wrapper,
  SequenceNumber,
  AddFoodButton,
  Dish,
  Title,
  EditButton,
  Img,
  BlockInfo,
  Carbohydrates,
  Protein,
  Fat,
} from './FoodDetails.styled';

const FoodDetails = ({ mealDetails, index, img }) => {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModalRecord = () => setIsRecordModalOpen(!isRecordModalOpen);
  const toggleModalEdit = () => setIsEditModalOpen(!isEditModalOpen);

  const { carbonohidrates, protein, fat, mealName, mealType, showButton } =
    mealDetails;

  return (
    <>
      {showButton ? (
        <Wrapper>
          <SequenceNumber>{index + 1}</SequenceNumber>
          <AddFoodButton onClick={toggleModalRecord}>
            + Record your meal
          </AddFoodButton>
          {isRecordModalOpen && (
            <RecordDiaryModal
              onClose={toggleModalRecord}
              image={img}
              mealType={mealType}
            />
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <SequenceNumber>{index + 1}</SequenceNumber>
          {mealType && (
            <Dish>
              <Title>{mealName}</Title>
              <EditButton type="button" onClick={toggleModalEdit}>
                <Img src={edit} alt="Edit" />
                Edit
              </EditButton>
              <BlockInfo>
                <Carbohydrates>
                  <span>Carb.:</span>
                  {carbonohidrates}
                </Carbohydrates>
                <Protein>
                  <span>Prot.:</span>
                  {protein}
                </Protein>
                <Fat>
                  <span>Fat:</span>
                  {fat}
                </Fat>
              </BlockInfo>
            </Dish>
          )}
          {isEditModalOpen && (
            <RecordDiaryModal
              onClose={toggleModalEdit}
              mealType={mealType}
              mealDetails={mealDetails}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

FoodDetails.propTypes = {
  mealDetails: PropTypes.oneOfType([
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      mealName: PropTypes.string.isRequired,
      carbonohidrates: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
    }),
    PropTypes.shape({
      mealType: PropTypes.string.isRequired,
      showButton: PropTypes.bool.isRequired,
    }),
    PropTypes.object,
  ]).isRequired,
  index: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default FoodDetails;
