import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Formik } from 'formik';

import { postMyWaterIntake } from 'redux/FoodIntake/foodIntakeOperations';
import validationSchemaForWater from 'validationSchemas/validationSchemaForWater';

import {
  Backdrop,
  Modal,
  Title,
  FormWrapper,
  Label,
  Button,
  ButtonCancel,
  Input,
  ErrorMes,
} from './ModalAddWater.styled';

const modalRoot = document.querySelector('#modal-root');

const AddWater = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const initialValues = {
    water: '',
  };

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  }, [onClose]);

  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleSubmit = (values, { resetForm }) => {
    dispatch(postMyWaterIntake({ volume: Number(values.water) }));
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
    <Backdrop onClick={handleBackdropClick}>
      <Modal className={isActive ? 'active' : ''}>
        <Title>Add water intake</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaForWater}
        >
          {({ errors, touched, values }) => (
            <FormWrapper autoComplete="off">
              <Label htmlFor="water">How much water</Label>
              <Input
                $error={errors.water && touched.water}
                value={values.water}
                name="water"
                type="number"
                placeholder="Enter milliliters"
              />
              <ErrorMes name="water" component="div" />
              <Button type="submit">Confirm</Button>
              <ButtonCancel type="button" onClick={closeModal}>
                Cancel
              </ButtonCancel>
            </FormWrapper>
          )}
        </Formik>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

AddWater.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddWater;
