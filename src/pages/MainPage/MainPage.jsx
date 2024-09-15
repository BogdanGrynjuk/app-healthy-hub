import {
  Container,
  Content,
  HeaderMainPage,
  TitlePage,
  LinkToDashboard,
  TrackerList,
  Tracker,
  Wrapper,
} from './MainPage.styled';

// import DailyGoal from 'components/BlockDailyGoal';
// import Water from 'components/Water';
import BlockFood from 'components/BlockFood';
// import DiaryOnMain from 'components/DiaryOnMain';
// import RecommendedFoodOnMain from 'components/RecommendedFoodOnMain';

import img1 from 'images/arrow-right.png';
import img2 from 'images/arrow-right@2x.png';
import BlockDailyGoal from 'components/BlockDailyGoal';
import BlockWater from 'components/BlockWater';
// import { selectStatsIsLoading } from 'redux/Statistics/statisticsSelectors';
// import Loader from 'components/Loader';

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

        <TrackerList>
          <Tracker>
            <BlockDailyGoal />
          </Tracker>
          <Tracker>
            <BlockWater />
          </Tracker>
          <Tracker>
            <BlockFood />
          </Tracker>
        </TrackerList>

        <Wrapper>
          {/* <DiaryOnMain /> */}
          {/* <RecommendedFoodOnMain /> */}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default MainPage;
