import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Backdrop,
  ButtonClose,
  ButtonLink,
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
import ModalLogOut from '../ModalLogOut';

const modalRoot = document.querySelector('#modal-root');

const ModalProfileMenu = ({ onClose }) => {
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
  }, [isInnerModalOpen, onClose]);

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
    <>
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
              <ButtonLink onClick={() => openInnerModal()}>
                <Icon src={imageLogOutSrc} alt="icon log out" />
                <Title>Log out</Title>
              </ButtonLink>
            </Content>
          </Modal>
        </Wrapper>
      </Backdrop>
      {isInnerModalOpen && <ModalLogOut onCloseInnerModal={closeInnerModal} />}
    </>,
    modalRoot
  );
};

ModalProfileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalProfileMenu;
