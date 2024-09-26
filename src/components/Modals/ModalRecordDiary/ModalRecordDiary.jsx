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

const RecordDiaryModal = ({ onClose, image, mealType, item }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const initialValues = {
    productList: [
      {
        mealType: mealType,
        mealName: item?.mealName ?? '',
        carbonohidrates: item?.carbonohidrates ?? '',
        protein: item?.protein ?? '',
        fat: item?.fat ?? '',
        calories: item?.calories ?? '',
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
        if (item) {
          dispatch(updateMyFoodIntake({ foodId: item._id, data }));
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
        <ModalTitle>Record your meal</ModalTitle>
        <FormTitleContainer>
          <Image src={image} alt={`image of ${mealType}`} />
          <Title>{mealType}</Title>
        </FormTitleContainer>
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
                    <FormList>
                      {values.productList.map((_, index) => (
                        <li key={index}>
                          <NutritionInfoForm
                            indexForm={index}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleRemove={() => remove(index)}
                          />
                        </li>
                      ))}
                    </FormList>
                    {!item && (
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
  image: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
};

export default RecordDiaryModal;
