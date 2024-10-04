import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { setUserHeight, setUserWeight } from 'redux/Auth/authSlice';
import { selectUser } from 'redux/Auth/authSelectors';
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
  const user = useSelector(selectUser);

  const initialValues = {
    height: user.height || '',
    weight: user.weight || '',
  };

  const handleClickNext = ({ height, weight }) => {
    dispatch(setUserHeight(height));
    dispatch(setUserWeight(weight));
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
              autoComplete="off"
              $error={touched.height && errors.height}
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
              autoComplete="off"
              $or={touched.weight && errors.weight}
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
