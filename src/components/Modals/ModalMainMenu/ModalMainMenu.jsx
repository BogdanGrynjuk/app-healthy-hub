import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import MetricMenu from 'components/MetricMenu';

import {
  Backdrop,
  ButtonClose,
  Content,
  IconClose,
  Modal,
} from './ModalMainMenu.styled';

import imageCloseSrc from 'images/icons/close-circle.svg';

const modalRoot = document.querySelector('#modal-root');

const ModalMainMenu = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      if (!isInnerModalOpen) {
        setIsVisible(false);
        onClose();
      }
    }, 300);
  }, [onClose, isInnerModalOpen]);

  const openInnerModal = useCallback(() => {
    setIsInnerModalOpen(true);
    setIsActive(false);
  }, []);

  const closeInnerModal = useCallback(() => {
    onClose();
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
      <Modal className={isActive ? 'active' : ''}>
        <ButtonClose type="button" onClick={closeModal}>
          <IconClose src={imageCloseSrc} alt="close" />
        </ButtonClose>
        <Content>
          <MetricMenu
            metricName="goal"
            onOpenInnerModal={openInnerModal}
            onCloseInnerModal={closeInnerModal}
          />
          <MetricMenu
            metricName="weight"
            onOpenInnerModal={openInnerModal}
            onCloseInnerModal={closeInnerModal}
          />
        </Content>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

ModalMainMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalMainMenu;
