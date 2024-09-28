import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { FieldArray, Formik } from 'formik';
import {
  Backdrop,
  Modal,
  ModalTitle,
  FormTitleContainer,
  Image,
  Title,
  FormWrapper,
  FormsContainer,
  FormList,
  BtnAddNewProduct,
  ButtonsContainer,
  BtnConfirm,
  BtnCancel,
} from './ModalRecordDiary.styled';
import validationSchemaForNutrients from 'validationSchemas/validationSchemaForNutrients';
import {
  postMyFoodIntake,
  updateMyFoodIntake,
} from 'redux/foodIntake/foodIntake.Operations';
import NutritionInfoForm from 'components/NutritionInfoForm';

const modalRoot = document.querySelector('#modal-root');

const RecordDiaryModal = ({ onClose, image, mealType, mealDetails }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const isEditMode = !!mealDetails;

  const dispatch = useDispatch();

  const initialValues = {
    productList: [
      {
        mealType: mealType,
        mealName: mealDetails?.mealName ?? '',
        carbonohidrates: mealDetails?.carbonohidrates ?? '',
        protein: mealDetails?.protein ?? '',
        fat: mealDetails?.fat ?? '',
        calories: mealDetails?.calories ?? '',
      },
    ],
  };

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  }, [onClose]);

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleSubmit = (values, { resetForm }) => {
    values.productList.forEach(
      ({ mealType, mealName, carbonohidrates, protein, fat, calories }) => {
        const data = {
          mealType,
          mealName,
          carbonohidrates: Number(carbonohidrates.toFixed(1)),
          protein: Number(protein.toFixed(1)),
          fat: Number(fat.toFixed(1)),
          calories,
        };
        if (isEditMode) {
          dispatch(
            updateMyFoodIntake({ id: mealDetails._id, updatedFoodIntake: data })
          );
        } else {
          dispatch(postMyFoodIntake(data));
        }
      }
    );
    resetForm();
    closeModal();
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setIsActive(true);
  }, []);

  if (!isVisible) return null;

  return createPortal(
    <Backdrop>
      <Modal className={isActive ? 'active' : ''}>
        <ModalTitle>
          {!mealDetails ? 'Record your meal' : 'Edit meal'}
        </ModalTitle>
        {!mealDetails && (
          <FormTitleContainer>
            <Image src={image} alt={`image of ${mealType}`} />
            <Title>{mealType}</Title>
          </FormTitleContainer>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaForNutrients}
        >
          {({ errors, touched, values }) => (
            <FormWrapper autoComplete="off">
              <FieldArray
                name="productList"
                render={({ insert, remove }) => (
                  <FormsContainer>
                    <FormList $isEditMode={isEditMode}>
                      {values.productList.map((_, index) => (
                        <li key={index}>
                          <NutritionInfoForm
                            isEditMode={isEditMode}
                            indexForm={index}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleRemove={() => remove(index)}
                          />
                        </li>
                      ))}
                    </FormList>
                    {!mealDetails && (
                      <BtnAddNewProduct
                        type="button"
                        onClick={() => {
                          insert(values.productList.length + 1, {
                            mealType: mealType,
                            mealName: '',
                            carbonohidrates: '',
                            protein: '',
                            fat: '',
                            calories: '',
                          });
                        }}
                      >
                        + Add more
                      </BtnAddNewProduct>
                    )}
                  </FormsContainer>
                )}
              />
              <ButtonsContainer>
                <BtnConfirm type="submit">Confirm</BtnConfirm>
                <BtnCancel type="button" onClick={closeModal}>
                  Cancel
                </BtnCancel>
              </ButtonsContainer>
            </FormWrapper>
          )}
        </Formik>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

RecordDiaryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string,
  mealType: PropTypes.string.isRequired,
  mealDetails: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbonohidrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    mealName: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
    protein: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

export default RecordDiaryModal;
