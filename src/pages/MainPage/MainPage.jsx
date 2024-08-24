import { useSelector } from 'react-redux';

import {
  Container,
  Content,
  HeaderMainPage,
  TitlePage,
  LinkToDashboard,
  TrackerList,
  Tarker,
  Wrapper,
} from './MainPage.styled';

import DailyGoal from 'components/DailyGoal';
import Water from 'components/Water';
import Food from 'components/Food';
import DiaryOnMain from 'components/DiaryOnMain';
import RecommendedFoodOnMain from 'components/RecommendedFoodOnMain';

import img1 from 'images/arrow-right.png';
import img2 from 'images/arrow-right@2x.png';
import { selectStatsIsLoading } from 'redux/Statistics/statisticsSelectors';
import Loader from 'components/Loader';

const MainPage = () => {
  const isLoading = useSelector(selectStatsIsLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
              <Tarker>
                <DailyGoal />
              </Tarker>
              <Tarker>
                <Water />
              </Tarker>
              <Tarker>
                <Food />
              </Tarker>
            </TrackerList>

            <Wrapper>
              <DiaryOnMain />
              <RecommendedFoodOnMain />
            </Wrapper>
          </Content>
        </Container>
      )}
    </>
  );
};

export default MainPage;
