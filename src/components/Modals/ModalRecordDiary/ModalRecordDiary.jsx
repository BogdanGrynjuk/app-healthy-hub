import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
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
  WrapperInput,
  Input,
  BtnRemoveProduct,
  BtnAddNewProduct,
  ErrorMsg,
  ContainerForBtns,
  BtnConfirm,
  BtnCancel,
  FormWrapper,
  FormsContainer,
  ProductFormList,
  ProductFormItem,
} from './ModalRecordDiary.styled';

import trash1x from 'images/trash.png';
import trash2x from 'images/trash@2x.png';

import validationSchemaForNutrients from 'validationSchemas/validationSchemaForNutrients';
import {
  postMyFoodIntake,
  updateMyFoodIntake,
} from 'redux/foodIntake/foodIntake.Operations';

const modalRoot = document.querySelector('#modal-root');

const RecordDiaryModal = ({ onClose, image, mealType, item }) => {
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

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleSubmit = (values, { resetForm }) => {
    values.productList.forEach(
      ({ mealType, mealName, carbonohidrates, protein, fat, calories }) => {
        const data = {
          mealType,
          mealName,
          carbonohidrates: parseFloat(carbonohidrates.toFixed(1)),
          protein: parseFloat(protein.toFixed(1)),
          fat: parseFloat(fat.toFixed(1)),
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
    onClose();
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Backdrop>
      <Modal>
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
                render={({ insert, remove }) => {
                  return (
                    <FormsContainer>
                      <ProductFormList>
                        {values.productList.map((product, index) => {
                          return (
                            <ProductFormItem key={index}>
                              <WrapperInput>
                                <Input
                                  type="text"
                                  id={`productList.${index}.mealName`}
                                  name={`productList.${index}.mealName`}
                                  placeholder="The name of the product or dish"
                                  value={values?.productList?.[index]?.mealName}
                                  error={
                                    touched?.productList?.[index]?.mealName &&
                                    errors?.productList?.[index]?.mealName
                                  }
                                />
                                <ErrorMsg
                                  name={`productList.${index}.mealName`}
                                  component="div"
                                />
                              </WrapperInput>

                              <WrapperInput>
                                <Input
                                  type="number"
                                  id={`productList.${index}.carbonohidrates`}
                                  name={`productList.${index}.carbonohidrates`}
                                  placeholder="Carbohydrates"
                                  value={
                                    values?.productList?.[index]
                                      ?.carbonohidrates
                                  }
                                  error={
                                    touched?.productList?.[index]
                                      ?.carbonohidrates &&
                                    errors?.productList?.[index]
                                      ?.carbonohidrates
                                  }
                                />
                                <ErrorMsg
                                  name={`productList.${index}.carbonohidrates`}
                                  component="div"
                                />
                              </WrapperInput>

                              <WrapperInput>
                                <Input
                                  type="number"
                                  id={`productList.${index}.protein`}
                                  name={`productList.${index}.protein`}
                                  placeholder="Protein"
                                  value={values?.productList?.[index]?.protein}
                                  error={
                                    touched?.productList?.[index]?.protein &&
                                    errors?.productList?.[index]?.protein
                                  }
                                />
                                <ErrorMsg
                                  name={`productList.${index}.protein`}
                                  component="div"
                                />
                              </WrapperInput>

                              <WrapperInput>
                                <Input
                                  type="number"
                                  id={`productList.${index}.fat`}
                                  name={`productList.${index}.fat`}
                                  placeholder="Fat"
                                  value={values?.productList?.[index]?.fat}
                                  error={
                                    touched?.productList?.[index]?.fat &&
                                    errors?.productList?.[index]?.fat
                                  }
                                />
                                <ErrorMsg
                                  name={`productList.${index}.fat`}
                                  component="div"
                                />
                              </WrapperInput>

                              <WrapperInput>
                                <Input
                                  type="number"
                                  id={`productList.${index}.calories`}
                                  name={`productList.${index}.calories`}
                                  placeholder="Calories"
                                  value={values?.productList?.[index]?.calories}
                                  error={
                                    touched?.productList?.[index]?.calories &&
                                    errors?.productList?.[index]?.calories
                                  }
                                />
                                <ErrorMsg
                                  name={`productList.${index}.calories`}
                                  component="div"
                                />
                              </WrapperInput>

                              {values.productList.length > 1 && (
                                <BtnRemoveProduct
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  <img
                                    srcSet={`${trash1x} 1x, ${trash2x} 2x`}
                                    width={20}
                                    height={20}
                                    src={trash1x}
                                    alt="Trash"
                                  />
                                </BtnRemoveProduct>
                              )}
                            </ProductFormItem>
                          );
                        })}
                      </ProductFormList>
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
                  );
                }}
              />

              <ContainerForBtns>
                <BtnConfirm type="submit">Confirm</BtnConfirm>
                <BtnCancel type="button" onClick={onClose}>
                  Cancel
                </BtnCancel>
              </ContainerForBtns>
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
