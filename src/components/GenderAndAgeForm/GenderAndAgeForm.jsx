import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { setNewUserAge, setNewUserGender } from 'redux/Auth/authSlice';
import validationSchemaForAge from 'validationSchemas/validationSchemaForAge';
import CustomRadioButton from 'components/CustomRadioButton';

import {
  FormWrapper,
  FormGroup,
  FormGroupLabel,
  WrapperRadioButton,
  Label,
  Input,
  ErrorMsg,
  ButtonContainer,
  NextButton,
  BackButton,
} from './GenderAndAgeForm.styled';

const GenderAndAgeForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const initialValues = {
    gender: 'Male',
    age: '',
  };

  const handleClickNext = values => {
    console.log(`Gender: ${values.gender} and Age: ${values.age}`);
    dispatch(setNewUserGender(values.gender));
    dispatch(setNewUserAge(values.age));
    navigate('/body-parameters');
  };

  const handleClickBack = () => {
    navigate(location.state?.from ?? '/your-goal');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleClickNext}
      validationSchema={validationSchemaForAge}
    >
      {({ errors, touched, values }) => (
        <FormWrapper>
          <FormGroup role="group" aria-labelledby="gender-head">
            <FormGroupLabel id="gender-head">Gender</FormGroupLabel>
            <WrapperRadioButton>
              <CustomRadioButton
                name="gender"
                value="Male"
                selectedValue={values.gender}
                text="Male"
              />
              <CustomRadioButton
                name="gender"
                value="Female"
                selectedValue={values.gender}
                text="Female"
              />
            </WrapperRadioButton>
          </FormGroup>

          <Label>
            Your age
            <Input
              type="number"
              name="age"
              placeholder="Enter your age"
              autoComplete="current-age"
              error={touched.age && errors.age}
              value={values.age}
              required
            />
            <ErrorMsg name="age" component="div" />
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

export default GenderAndAgeForm;
