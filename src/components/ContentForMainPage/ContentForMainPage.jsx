import React from 'react';
import {
  HeaderMainPage,
  LinkToDashboard,
  TitlePage,
  LinkText,
  LinkImage,
  FlexContainer,
} from './ContentForMainPage.styled';

import arrowRight from 'images/icons/arrow-right.svg';
import SectionDailyConsumptionSummary from 'components/SectionDailyConsumptionSummary';
import SectionDiary from 'components/SectionDiary';
import SectionRecommendedFood from 'components/SectionRecommendedFood';

const ContentForMainPage = () => {
  return (
    <>
      <HeaderMainPage>
        <TitlePage>Today</TitlePage>
        <LinkToDashboard to="/dashboard">
          <LinkText>On the way to the goal</LinkText>
          <LinkImage src={arrowRight} alt="Arrow right" />
        </LinkToDashboard>
      </HeaderMainPage>

      <SectionDailyConsumptionSummary />

      <FlexContainer>
        <SectionDiary />
        <SectionRecommendedFood />
      </FlexContainer>
    </>
  );
};

export default ContentForMainPage;
