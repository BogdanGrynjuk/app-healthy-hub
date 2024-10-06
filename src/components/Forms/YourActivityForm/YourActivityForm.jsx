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
import CustomRadioButton from 'components/UI/CustomRadioButton';
import { setUserActivity } from 'redux/Auth/authSlice';
import { signUp } from 'redux/Auth/authOperations';
import { selectError, selectUser } from 'redux/Auth/authSelectors';
import { PHYSICAL_ACTIVITY_OPTIONS } from 'constants/physicalActivityOptions';

const YourActivityForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  const initialValues = {
    physicalActivityRatio: user.physicalActivityRatio || '1.2',
  };

  const handleClickNext = ({ physicalActivityRatio }) => {
    dispatch(setUserActivity(physicalActivityRatio));
    dispatch(
      signUp({
        ...user,
        physicalActivityRatio: Number(physicalActivityRatio),
      })
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
            {PHYSICAL_ACTIVITY_OPTIONS.map(option => {
              return (
                <CustomRadioButton
                  key={option.value}
                  name="physicalActivityRatio"
                  value={option.value}
                  selectedValue={values.physicalActivityRatio}
                  text={option.text}
                />
              );
            })}
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
