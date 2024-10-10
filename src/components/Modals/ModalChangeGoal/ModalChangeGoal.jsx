import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { selectUser } from 'redux/Auth/authSelectors';

import {
  Backdrop,
  ButtonClose,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  Content,
  Description,
  FormWrapper,
  IconClose,
  IconContainer,
  IconGoal,
  Input,
  Label,
  Modal,
  Title,
  Wrapper,
} from './ModalChangeGoal.styled';

import imageCloseSrc from 'images/icons/close-circle.svg';
import { GOAL_OPTIONS } from 'constants/goalOptions';
import { getGoalIcon } from 'helpers/getGoalIcon';
import { updateUser } from 'redux/Auth/authOperations';

const modalRoot = document.querySelector('#modal-root');

const ModalChangeGoal = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const user = useSelector(selectUser);

  const goalConfig = GOAL_OPTIONS.map(option => ({
    goal: option.value,
    icon: getGoalIcon(user.gender, option.value),
  }));

  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 0);
  }, [onClose]);

  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setIsActive(true);
  }, []);

  if (!isVisible) return null;

  const handleSubmit = values => {
    console.log('Selected goal:', values.goal);
    dispatch(updateUser({ goal: values.goal }));

    closeModal();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <Modal className={isActive ? 'active' : ''}>
          <ButtonClose type="button" onClick={closeModal}>
            <IconClose src={imageCloseSrc} alt="close" />
          </ButtonClose>

          <Content>
            <Title>Target selection</Title>
            <Description>
              The service will adjust your calorie intake to your goal
            </Description>

            <Formik
              initialValues={{ goal: user.goal || '' }}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <FormWrapper>
                  {goalConfig.map(option => (
                    <Label
                      key={option.goal}
                      $checked={values.goal === option.goal}
                    >
                      <Input
                        type="radio"
                        name="goal"
                        value={option.goal}
                        checked={values.goal === option.goal}
                      />
                      <IconContainer $checked={values.goal === option.goal}>
                        <IconGoal
                          src={option.icon}
                          alt={`icon ${option.goal}`}
                        />
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
          </Content>
        </Modal>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

ModalChangeGoal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalChangeGoal;
