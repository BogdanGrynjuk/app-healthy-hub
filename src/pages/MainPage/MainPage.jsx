import {
  Container,
  Content,
  HeaderMainPage,
  TitlePage,
  LinkToDashboard,
  Wrapper,
} from './MainPage.styled';

import img1 from 'images/arrow-right.png';
import img2 from 'images/arrow-right@2x.png';

import SectionDailyConsumptionSummary from 'components/SectionDailyConsumptionSummary';
import SectionDiary from 'components/SectionDiary';
import SectionRecommendedFood from 'components/SectionRecommendedFood';

const MainPage = () => {
  return (
    <Container>
      <Content>
        <HeaderMainPage>
          <TitlePage>Today</TitlePage>
          <LinkToDashboard to="/dashboard">
            <p>On the way to the goal</p>
            <img
              srcSet={`${img1} 1x, ${img2} 2x`}
              width={16}
              height={16}
              src={img1}
              alt="Arrow right"
            />
          </LinkToDashboard>
        </HeaderMainPage>

        <SectionDailyConsumptionSummary />

        <Wrapper>
          <SectionDiary />
          <SectionRecommendedFood />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default MainPage;
