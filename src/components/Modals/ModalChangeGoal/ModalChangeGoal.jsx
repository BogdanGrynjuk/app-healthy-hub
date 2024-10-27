import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import ChangeGoalForm from 'components/Forms/ChangeGoalForm';

import {
  Backdrop,
  ButtonClose,
  Content,
  Description,
  IconClose,
  Modal,
  Title,
  Wrapper,
} from './ModalChangeGoal.styled';

import imageCloseSrc from 'images/icons/close-circle.svg';

const modalRoot = document.querySelector('#modal-root');

const ModalChangeGoal = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
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
            <ChangeGoalForm closeModal={closeModal} />
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
