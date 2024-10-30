import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import { logOut } from 'redux/Auth/authOperations';
import {
  Backdrop,
  ButtonCancel,
  ButtonsContainer,
  CustomLink,
  Modal,
  ModalTitle,
} from './ModalLogOut.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalLogOut = ({ onCloseInnerModal }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      setIsVisible(false);
      onCloseInnerModal();
    }, 300);
  }, [onCloseInnerModal]);

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleLogOut = () => dispatch(logOut());

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
        <ModalTitle>
          Are you sure you want to log out of the application?
        </ModalTitle>

        <ButtonsContainer>
          <CustomLink onClick={handleLogOut} to={'/'}>
            Log out
          </CustomLink>
          <ButtonCancel type="button" onClick={closeModal}>
            Cancel
          </ButtonCancel>
        </ButtonsContainer>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

ModalLogOut.propTypes = {
  onCloseInnerModal: PropTypes.func.isRequired,
};

export default ModalLogOut;
