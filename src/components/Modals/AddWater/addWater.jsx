import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Formik } from 'formik';

import { postMyWaterIntake } from 'redux/FoodIntake/foodIntake.Operations';
import validationSchemaForWater from 'validationSchemas/validationSchemaForWater';

import {
  Backdrop,
  Modal,
  Title,
  FormFormic,
  Label,
  Button,
  ButtonCancel,
  Input,
  ErrorMes,
} from './addWater.styled';

const initialValues = {
  water: '',
};

const modalRoot = document.querySelector('#modal-root');

const AddWater = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleSubmit = values => {
    dispatch(postMyWaterIntake({ volume: Number(values.water) }));
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
        <Title>Add water intake</Title>
        <Formik
          initialValues={initialValues}
          validateOnBlur={false}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaForWater}
        >
          <FormFormic autoComplete="off">
            <Label htmlFor="water">How much water</Label>
            <Input name="water" type="number" placeholder="Enter milliliters" />
            <ErrorMes name="water" component="div" />
            <Button type="submit">Confirm</Button>
            <ButtonCancel type="button" onClick={onClose}>
              Cancel
            </ButtonCancel>
          </FormFormic>
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
