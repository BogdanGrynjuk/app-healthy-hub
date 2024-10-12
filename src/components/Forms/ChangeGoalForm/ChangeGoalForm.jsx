import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { selectUser } from 'redux/Auth/authSelectors';
import { updateUser } from 'redux/Auth/authOperations';
import { GOAL_OPTIONS } from 'constants/goalOptions';
import { getGoalIcon } from 'helpers/getGoalIcon';

import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  FormWrapper,
  IconContainer,
  IconGoal,
  Input,
  Label,
} from './ChangeGoalForm.styled';

const GoalForm = ({ closeModal }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(updateUser({ goal: values.goal }));
    closeModal();
  };

  const goalConfig = GOAL_OPTIONS.map(option => ({
    goal: option.value,
    icon: getGoalIcon(user.gender, option.value),
  }));

  return (
    <Formik initialValues={{ goal: user.goal || '' }} onSubmit={handleSubmit}>
      {({ values }) => (
        <FormWrapper>
          {goalConfig.map(option => (
            <Label key={option.goal} $checked={values.goal === option.goal}>
              <Input
                type="radio"
                name="goal"
                value={option.goal}
                checked={values.goal === option.goal}
              />
              <IconContainer $checked={values.goal === option.goal}>
                <IconGoal src={option.icon} alt={`icon ${option.goal}`} />
              </IconContainer>
              {option.goal}
            </Label>
          ))}
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

GoalForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default GoalForm;
