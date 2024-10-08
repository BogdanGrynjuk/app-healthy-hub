import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  ButtonClose,
  Content,
  IconClose,
  Modal,
} from './ModalMainMenu.styled';

import imageCloseSrc from 'images/icons/close-circle.svg';
import MetricMenu from 'components/MetricMenu';

const modalRoot = document.querySelector('#modal-root');

const ModalMainMenu = ({ onClose }) => {
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

  const handleClickButtonClose = () => {
    closeModal();
  };

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
      <Modal className={isActive ? 'active' : ''}>
        <ButtonClose type="button" onClick={handleClickButtonClose}>
          <IconClose src={imageCloseSrc} alt="close" />
        </ButtonClose>
        <Content>
          <MetricMenu metricName="goal" />
          <MetricMenu metricName="weight" />
        </Content>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default ModalMainMenu;
