import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { selectUser } from 'redux/Auth/authSelectors';
import { updateUser } from 'redux/Auth/authOperations';
import validationSchemaForWeight from 'validationSchemas/validationSchemaForWeight';
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  ErrorMsg,
  FormWrapper,
  Input,
  Label,
} from './ChangeWeightForm.styled';

const ChangeWeightForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const initialValues = {
    weight: user.weight || '',
  };

  const handleSubmit = values => {
    dispatch(updateUser({ weight: values.weight }));
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaForWeight}
    >
      {({ errors, touched, values }) => (
        <FormWrapper>
          <Label>
            <Input
              type="number"
              name="weight"
              placeholder="Enter your weight"
              autoComplete="off"
              $error={touched.weight && errors.weight}
              value={values.weight}
              required
            />
            <ErrorMsg name="weight" component="div" />
          </Label>

          <ButtonContainer>
            <ConfirmButton type="submit">Confirm</ConfirmButton>
            <CancelButton type="button" onClick={closeModal}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        </FormWrapper>
      )}
    </Formik>
  );
};

ChangeWeightForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ChangeWeightForm;
