import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserGoal } from 'redux/Auth/authSlice';
import { Formik } from 'formik';

import CustomRadioButton from 'components/UI/CustomRadioButton/CustomRadioButton';

import { FormGroup, FormWrapper, NextButton } from './YourGoalForm.styled';
import { selectUser } from 'redux/Auth/authSelectors';
import { GOAL_OPTIONS } from 'constants/goalOptions';

const YourGoalForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const initialValues = {
    goal: user.goal || 'Lose fat',
  };

  const handleClickNext = values => {
    dispatch(setUserGoal(values.goal));
    navigate('/select-gender');
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleClickNext}>
      {({ values }) => (
        <FormWrapper>
          <FormGroup role="group" aria-labelledby="goal-head">
            {GOAL_OPTIONS.map(option => (
              <CustomRadioButton
                name="goal"
                key={option.value}
                value={option.value}
                selectedValue={values.goal}
                text={option.text}
              />
            ))}
          </FormGroup>
          <NextButton type="submit">Next</NextButton>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default YourGoalForm;
