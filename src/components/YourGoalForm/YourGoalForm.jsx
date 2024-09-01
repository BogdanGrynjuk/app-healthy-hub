import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewUserGoal } from 'redux/Auth/authSlice';
import { Formik } from 'formik';

import CustomRadioButton from 'components/CustomRadioButton/CustomRadioButton';

import { FormGroup, FormWrapper, NextButton } from './YourGoalForm.styled';

const YourGoalForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    goal: 'Lose fat',
  };

  const handleClickNext = values => {
    console.log(`Goal: ${values.goal}`);
    dispatch(setNewUserGoal(values.goal));
    navigate('/select-gender');
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleClickNext}>
      {({ values }) => (
        <FormWrapper>
          <FormGroup role="group" aria-labelledby="goal-head">
            <CustomRadioButton
              name="goal"
              value="Lose fat"
              selectedValue={values.goal}
              text="Lose fat"
            />
            <CustomRadioButton
              name="goal"
              value="Maintain"
              selectedValue={values.goal}
              text="Maintain"
            />
            <CustomRadioButton
              name="goal"
              value="Gain muscle"
              selectedValue={values.goal}
              text="Gain muscle"
            />
          </FormGroup>
          <NextButton type="submit">Next</NextButton>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default YourGoalForm;
