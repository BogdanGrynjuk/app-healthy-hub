import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import arrowLeft from 'images/icons/arrow-left.svg';
import banner from 'images/settings-page.png';

import {
  ArrowReturn,
  BannerThumb,
  Content,
  HeaderPage,
  Img,
  LinkToBack,
  TitlePage,
} from './ContentForSettingsPage.styled';
import ProfileSettingForm from 'components/Forms/ProfileSettingForm';

const ContentForSettingsPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  return (
    <>
      <HeaderPage>
        <LinkToBack to={backLinkLocationRef.current}>
          <ArrowReturn src={arrowLeft} alt="arrow left" />
        </LinkToBack>
        <TitlePage>Profile setting</TitlePage>
      </HeaderPage>

      <Content>
        <BannerThumb>
          <Img src={banner} alt="Banner Interactive learning experience" />
        </BannerThumb>

        <ProfileSettingForm />
      </Content>
    </>
  );
};

export default ContentForSettingsPage;
