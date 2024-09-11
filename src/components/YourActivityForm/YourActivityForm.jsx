import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import {
  FormWrapper,
  FormGroup,
  ButtonContainer,
  NextButton,
  BackButton,
} from './YourActivityForm.styled';
import CustomRadioButton from 'components/CustomRadioButton';
import { setNewUserActivity } from 'redux/Auth/authSlice';
import { signUp } from 'redux/Auth/authOperations';
import { selectError, selectUser } from 'redux/Auth/authSelectors';

const YourActivityForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  const initialValues = {
    activity: user.activity || '1.2',
  };

  const handleClickNext = ({ activity }) => {
    dispatch(setNewUserActivity(activity));
    dispatch(
      signUp({ ...user, activity, physicalActivityRatio: Number(activity) })
    );
  };

  const handleClickBack = () => {
    navigate(location.state?.from ?? '/body-parameters');
  };

  useEffect(() => {
    if (error) {
      navigate('/signup');
    }
  }, [error, navigate]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleClickNext}>
      {({ values }) => (
        <FormWrapper>
          <FormGroup role="group" aria-labelledby="activity-head">
            <CustomRadioButton
              name="activity"
              value="1.2"
              selectedValue={values.activity}
              text="1.2 - if you do not have physical activity and sedentary work"
            />
            <CustomRadioButton
              name="activity"
              value="1.375"
              selectedValue={values.activity}
              text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
            />
            <CustomRadioButton
              name="activity"
              value="1.55"
              selectedValue={values.activity}
              text="1.55 - if you play sports with average loads 3-5 times a week"
            />
            <CustomRadioButton
              name="activity"
              value="1.725"
              selectedValue={values.activity}
              text="1,725 - if you train fully 6-7 times a week"
            />
            <CustomRadioButton
              name="activity"
              value="1.9"
              selectedValue={values.activity}
              text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
            />
          </FormGroup>

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

export default YourActivityForm;
