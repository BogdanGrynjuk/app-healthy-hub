import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';

import imageWeightSrc from 'images/icons/weight-image.svg';
import imageProfileSrc from 'images/icons/profile-circle.svg';
import imageArrowDownSrc from 'images/icons/arrow-down.svg';
import imageEditSrc from 'images/icons/edit.svg';
import imageMenuSrc from 'images/icons/menu.svg';
import imageMenuOpenedSrc from 'images/icons/menu-opened.svg';

import TargetModal from '../HeaderModals/TargetModal';
import WeightModal from '../HeaderModals/WeightModal';
import ProfileModal from '../HeaderModals/ProfileModal';
import MenuModal from '../HeaderModals/MenuModal';

import { clearError } from 'redux/Auth/authSlice';

import {
  Icon,
  IconArrow,
  IconContainer,
  IconEdit,
  InfoBlockMetricMenu,
  Logo,
  MainMenu,
  MainMenuContainer,
  MainMenuImage,
  Marker,
  MetricMenu,
  MetricsSection,
  ProfileMenu,
  TextContainer,
  TitleMetricMenu,
  UserAvatar,
  UserAvatarContainer,
  UserMetricsSection,
  UserName,
  Value,
} from './AuthenticatedHeader.styled';
import { getGoalIcon } from 'helpers/getGoalIcon';

const AuthenticatedHeader = () => {
  const dispatch = useDispatch();
  const [isOpenModalTarget, setIsOpenModalTarget] = useState(false);
  const [isOpenModalWeight, setIsOpenModalWeight] = useState(false);
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);

  const { gender, goal, weight, name, avatarURL } = useSelector(selectUser);

  const goalIcon = useMemo(() => getGoalIcon(gender, goal), [gender, goal]);

  const handlerNavigationLinkClick = () => {
    dispatch(clearError());
  };

  const toggleModalMenu = () => {
    setIsOpenModalMenu(isOpenModalMenu => !isOpenModalMenu);
  };

  const toggleModalTarget = () => {
    setIsOpenModalTarget(isOpenModalTarget => !isOpenModalTarget);
  };

  const toggleModalWeight = () => {
    setIsOpenModalWeight(isOpenModalWeight => !isOpenModalWeight);
  };

  const toggleModalProfile = () => {
    setIsOpenModalProfile(isOpenModalProfile => !isOpenModalProfile);
  };

  return (
    <>
      <MainMenuContainer>
        <Logo to={'/main'} onClick={handlerNavigationLinkClick}>
          HealthyHub
        </Logo>
        <MainMenu onClick={toggleModalMenu}>
          {isOpenModalMenu ? (
            <MainMenuImage src={imageMenuOpenedSrc} alt="menu" />
          ) : (
            <MainMenuImage src={imageMenuSrc} alt="menu" />
          )}
          {isOpenModalMenu && <MenuModal onCloseModal={toggleModalMenu} />}
        </MainMenu>
      </MainMenuContainer>

      <UserMetricsSection>
        <MetricsSection>
          <MetricMenu type="button" onClick={toggleModalTarget}>
            <IconContainer>
              <Icon src={goalIcon} alt="current goal" />
            </IconContainer>
            <TextContainer>
              <TitleMetricMenu>Goal</TitleMetricMenu>
              <InfoBlockMetricMenu>
                <Value>{goal || 'No goal yet'}</Value>
                <IconArrow
                  src={imageArrowDownSrc}
                  alt="arrow down"
                  $isOpen={isOpenModalTarget}
                />
              </InfoBlockMetricMenu>
            </TextContainer>
            {isOpenModalTarget && (
              <TargetModal onCloseModal={toggleModalTarget} />
            )}
          </MetricMenu>

          <MetricMenu type="button" onClick={toggleModalWeight}>
            <IconContainer>
              <Icon src={imageWeightSrc} alt="weight" />
            </IconContainer>
            <TextContainer>
              <TitleMetricMenu>Weight</TitleMetricMenu>
              <InfoBlockMetricMenu>
                <Value>
                  {weight || 0} <Marker>kg</Marker>
                </Value>
                <IconEdit src={imageEditSrc} alt="edit" />
              </InfoBlockMetricMenu>
            </TextContainer>
            {isOpenModalWeight && (
              <WeightModal onCloseModal={toggleModalWeight} />
            )}
          </MetricMenu>
        </MetricsSection>

        <ProfileMenu type="button" onClick={toggleModalProfile}>
          <UserName>{name || 'User'}</UserName>
          <UserAvatarContainer>
            <UserAvatar src={avatarURL || imageProfileSrc} alt="user avatar" />
          </UserAvatarContainer>
          <IconArrow
            src={imageArrowDownSrc}
            alt="arrow down"
            $isOpen={isOpenModalProfile}
          />
          {isOpenModalProfile && (
            <ProfileModal onCloseModal={toggleModalProfile} />
          )}
        </ProfileMenu>
      </UserMetricsSection>
    </>
  );
};

export default AuthenticatedHeader;
