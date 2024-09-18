import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import image from 'images/Ketogenic.png';
import {
  Container,
  Content,
  HeaderPage,
  BackLink,
  ArrowReturn,
  TitlePage,
  InfoBox,
  BannerThumb,
  Img,
  TextContainer,
} from './RecommendedFoodPage.styled';

import arrowLeft from 'images/icons/arrow-left.svg';
import ListRecommendedFood from 'components/ListRecommendedFood';

export default function RecommendedFood() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  return (
    <Container>
      <Content>
        <HeaderPage>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowLeft} alt="arrow right" />
          </BackLink>
          <TitlePage>Recommended food</TitlePage>
        </HeaderPage>

        <InfoBox>
          <BannerThumb>
            <Img src={image} alt="Banner recommended food" />
          </BannerThumb>

          <TextContainer>
            <ListRecommendedFood itemLimit={10} />
          </TextContainer>
        </InfoBox>
      </Content>
    </Container>
  );
}
