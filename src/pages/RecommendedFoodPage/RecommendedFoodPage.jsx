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
} from './RecommendedFoodPage.styled';

import arrowRight from 'images/icons/arrow-right.svg';
import ListRecommendedFood from 'components/ListRecommendedFood';

export default function RecommendedFood() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  return (
    <Container>
      <Content>
        <HeaderPage>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <TitlePage>Recommended food</TitlePage>
        </HeaderPage>

        <InfoBox>
          <BannerThumb>
            <Img src={image} alt="Banner recommended food" />
          </BannerThumb>

          <ListRecommendedFood itemLimit={10} />
        </InfoBox>
      </Content>
    </Container>
  );
}
