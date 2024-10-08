import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import imageMenuSrc from 'images/icons/menu.svg';
import imageMenuOpenedSrc from 'images/icons/menu-opened.svg';

import { clearError } from 'redux/Auth/authSlice';

import {
  Logo,
  MainMenu,
  MainMenuContainer,
  MainMenuImage,
  MetricsSection,
  UserMetricsSection,
} from './AuthenticatedHeader.styled';

import ModalMainMenu from 'components/Modals/ModalMainMenu';
import MetricMenu from 'components/MetricMenu';
import ProfileMenu from 'components/ProfileMenu';

const AuthenticatedHeader = () => {
  const dispatch = useDispatch();
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);

  const handlerNavigationLinkClick = () => {
    dispatch(clearError());
  };
  const openModal = useCallback(setModalState => {
    setModalState(true);
  }, []);

  const closeModal = useCallback(setModalState => {
    setModalState(false);
  }, []);

  return (
    <>
      <MainMenuContainer>
        <Logo to={'/main'} onClick={handlerNavigationLinkClick}>
          HealthyHub
        </Logo>
        <MainMenu onClick={() => openModal(setIsOpenModalMenu)}>
          {isOpenModalMenu ? (
            <MainMenuImage src={imageMenuOpenedSrc} alt="main menu" />
          ) : (
            <MainMenuImage src={imageMenuSrc} alt="main menu" />
          )}
          {isOpenModalMenu && (
            <ModalMainMenu onClose={() => closeModal(setIsOpenModalMenu)} />
          )}
        </MainMenu>
      </MainMenuContainer>

      <UserMetricsSection>
        <MetricsSection>
          <MetricMenu metricName="goal" />
          <MetricMenu metricName="weight" />
        </MetricsSection>

        <ProfileMenu />
      </UserMetricsSection>
    </>
  );
};

export default AuthenticatedHeader;
