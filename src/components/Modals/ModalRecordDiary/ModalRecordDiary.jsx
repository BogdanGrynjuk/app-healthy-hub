import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { FieldArray, Formik } from 'formik';

import {
  Backdrop,
  Modal,
  ModalTitle,
  WrapperFormTitle,
  Image,
  Title,
  FormFormic,
  ContentWrapper,
  ProductList,
  Product,
  WrapperInput,
  Input,
  BtnRemoveProduct,
  BtnAddNewProduct,
  ErrorMsg,
  ContainerForBtns,
  BtnConfirm,
  BtnCancel,
} from './ModalRecordDiary.styled';

import img1 from 'images/trash.png';
import img2 from 'images/trash@2x.png';

import validationSchemaForNutrients from 'validationSchemas/validationSchemaForNutrients';
import {
  postMyFoodIntake,
  updateMyFoodIntake,
} from 'redux/foodIntake/foodIntake.Operations';

const modalRoot = document.querySelector('#modal-root');

const RecordDiaryModal = ({ onClose, image, mealType, item }) => {
  const initialValues = {
    productList: [
      {
        mealType: mealType,
        mealName: item?.mealName ?? '',
        carbonohidrates: item?.carbohydrates ?? '',
        protein: item?.protein ?? '',
        fat: item?.fat ?? '',
        calories: item?.calories ?? '',
      },
    ],
  };

  const dispatch = useDispatch();

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    await values.productList.forEach(
      ({ mealType, mealName, carbonohidrates, protein, fat, calories }) => {
        const data = {
          mealType: mealType.toString(),
          mealName: mealName.toString(),
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
        <WrapperFormTitle>
          <Image src={image} alt={`image of ${mealType}`} />
          <Title>{mealType}</Title>
        </WrapperFormTitle>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaForNutrients}
        >
          {({ errors, touched, values }) => (
            <FormFormic autoComplete="off">
              <FieldArray
                name="productList"
                render={({ insert, remove }) => {
                  return (
                    <ContentWrapper>
                      <ProductList>
                        {values.productList.map((product, index) => {
                          return (
                            <Product key={index}>
                              <WrapperInput>
                                <Input
                                  type="text"
                                  id={`productList.${index}.mealName`}
                                  name={`productList.${index}.mealName`}
                                  placeholder="The name of the product or dish"
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
                                    srcSet={`${img1} 1x, ${img2} 2x`}
                                    width={20}
                                    height={20}
                                    src={img1}
                                    alt="Trash"
                                  />
                                </BtnRemoveProduct>
                              )}
                            </Product>
                          );
                        })}
                      </ProductList>
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
                    </ContentWrapper>
                  );
                }}
              />

              <ContainerForBtns>
                <BtnConfirm type="submit">Confirm</BtnConfirm>
                <BtnCancel type="button" onClick={onClose}>
                  Cancel
                </BtnCancel>
              </ContainerForBtns>
            </FormFormic>
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
