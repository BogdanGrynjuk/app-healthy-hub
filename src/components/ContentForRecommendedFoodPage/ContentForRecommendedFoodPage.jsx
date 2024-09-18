import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import {
  ArrowReturn,
  BannerThumb,
  HeaderPage,
  Img,
  InfoBox,
  LinkToBack,
  TextContainer,
  TitlePage,
} from './ContentForRecommendedFoodPage.styled';

import arrowLeft from 'images/icons/arrow-left.svg';
import banner from 'images/Ketogenic.png';
import ListRecommendedFood from 'components/ListRecommendedFood';

const ContentForRecommendedFoodPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  return (
    <>
      <HeaderPage>
        <LinkToBack to={backLinkLocationRef.current}>
          <ArrowReturn src={arrowLeft} alt="arrow right" />
        </LinkToBack>
        <TitlePage>Recommended food</TitlePage>
      </HeaderPage>

      <InfoBox>
        <BannerThumb>
          <Img src={banner} alt="Banner recommended food" />
        </BannerThumb>

        <TextContainer>
          <ListRecommendedFood itemLimit={10} />
        </TextContainer>
      </InfoBox>
    </>
  );
};

export default ContentForRecommendedFoodPage;
