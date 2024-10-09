import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import imageCloseSrc from 'images/icons/close-circle.svg';
import {
  Backdrop,
  ButtonClose,
  Content,
  IconClose,
  Modal,
  Wrapper,
} from './ModalChangeGoal.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalChangeGoal = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // const dispatch = useDispatch();

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

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <Modal className={isActive ? 'active' : ''}>
          <ButtonClose type="button" onClick={closeModal}>
            <IconClose src={imageCloseSrc} alt="close" />
          </ButtonClose>
          <Content>
            <span style={{ color: '#fff' }}>ModalGoalMenu</span>
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
