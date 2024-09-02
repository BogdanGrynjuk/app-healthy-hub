import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { setNewUserHeight, setNewUserWeight } from 'redux/Auth/authSlice';
import validationSchemaForHeightAndWeight from 'validationSchemas/validationSchemaForHeightAndWeight';

import {
  FormWrapper,
  Label,
  Input,
  ErrorMsg,
  ButtonContainer,
  NextButton,
  BackButton,
} from './BodyParametersForm.styled';

const BodyParametersForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const initialValues = {
    height: '',
    weight: '',
  };

  const handleClickNext = ({ height, weight }) => {
    console.log(`height: ${height} and weight: ${weight}`);
    dispatch(setNewUserHeight(height));
    dispatch(setNewUserWeight(weight));
    navigate('/your-activity');
  };

  const handleClickBack = () => {
    navigate(location.state?.from ?? '/select-gender');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleClickNext}
      validationSchema={validationSchemaForHeightAndWeight}
    >
      {({ errors, touched, values }) => (
        <FormWrapper>
          <Label>
            Height
            <Input
              type="number"
              name="height"
              placeholder="Enter your height"
              autoComplete="height"
              error={touched.height && errors.height}
              value={values.height}
              required
            />
            <ErrorMsg name="height" component="div" />
          </Label>

          <Label>
            Weight
            <Input
              type="number"
              name="weight"
              placeholder="Enter your weight"
              autoComplete="weight"
              error={touched.weight && errors.weight}
              value={values.weight}
              required
            />
            <ErrorMsg name="weight" component="div" />
          </Label>

          <ButtonContainer>
            <NextButton type="submit">Next</NextButton>
            <BackButton type="button" onClick={handleClickBack}>
              Back
            </BackButton>
          </ButtonContainer>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default BodyParametersForm;
