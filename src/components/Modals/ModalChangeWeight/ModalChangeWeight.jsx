import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Backdrop,
  ButtonClose,
  Content,
  CurrentDate,
  Description,
  IconClose,
  Modal,
  Title,
  Wrapper,
} from './ModalChangeWeight.styled';

import imageCloseSrc from 'images/icons/close-circle.svg';
import ChangeWeightForm from 'components/Forms/ChangeWeightForm';

const modalRoot = document.querySelector('#modal-root');

const ModalChangeWeight = ({ onClose }) => {
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

  function getCurrentDateFormattedUTC() {
    const currentDate = new Date();

    const day = currentDate.getUTCDate().toString().padStart(2, '0');
    const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0'); // Місяці нумеруються з 0, тому додаємо 1
    const year = currentDate.getUTCFullYear();

    return `${day}.${month}.${year}`;
  }

  const currentDate = getCurrentDateFormattedUTC();

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
            <Title>Enter your current weight</Title>
            <Description>You can record your weight once a day</Description>
            <CurrentDate>
              Today
              <span>{currentDate}</span>
            </CurrentDate>
            <ChangeWeightForm closeModal={closeModal} />
          </Content>
        </Modal>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

ModalChangeWeight.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalChangeWeight;
