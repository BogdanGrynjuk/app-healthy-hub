import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/Auth/authSelectors';
import ProfileModal from 'components/HeaderModals/ProfileModal';

import {
  IconArrow,
  UserAvatar,
  UserAvatarContainer,
  UserName,
  WrapperProfileMenu,
} from './ProfileMenu.styled';

import imageProfileSrc from 'images/icons/profile-circle.svg';
import imageArrowDownSrc from 'images/icons/arrow-down.svg';

const ProfileMenu = () => {
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);

  const { name, avatarURL } = useSelector(selectUser);

  const openModal = useCallback(setModalState => {
    setModalState(true);
  }, []);

  const closeModal = useCallback(setModalState => {
    setModalState(false);
  }, []);

  return (
    <WrapperProfileMenu
      type="button"
      onClick={() => openModal(setIsOpenModalProfile)}
    >
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
        <ProfileModal onCloseModal={() => closeModal(setIsOpenModalProfile)} />
      )}
    </WrapperProfileMenu>
  );
};

export default ProfileMenu;
