import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from 'redux/Auth/authOperations';

import {
  Backdrop,
  ButtonClose,
  Content,
  CustomLink,
  Icon,
  IconClose,
  Modal,
  Title,
  Wrapper,
} from './ModalProfileMenu.styled';

import imageCloseSrc from 'images/icons/close-circle.svg';
import imageSettingSrc from 'images/icons/setting-2.svg';
import imageLogOutSrc from 'images/icons/logout.svg';

const modalRoot = document.querySelector('#modal-root');

const ModalProfileMenu = ({ onClose }) => {
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

  const dispatch = useDispatch();
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
      <Wrapper>
        <Modal className={isActive ? 'active' : ''}>
          <ButtonClose type="button" onClick={closeModal}>
            <IconClose src={imageCloseSrc} alt="close" />
          </ButtonClose>
          <Content>
            <CustomLink onClick={closeModal} to={'/settings'}>
              <Icon src={imageSettingSrc} alt="icon setting" />
              <Title>Setting</Title>
            </CustomLink>
            <CustomLink onClick={handleLogOut} to={'/'}>
              <Icon src={imageLogOutSrc} alt="icon log out" />
              <Title>Log out</Title>
            </CustomLink>
          </Content>
        </Modal>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

ModalProfileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalProfileMenu;
