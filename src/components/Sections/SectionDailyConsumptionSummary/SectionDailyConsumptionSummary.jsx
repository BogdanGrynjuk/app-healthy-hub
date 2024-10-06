import React from 'react';
import {
  Section,
  SectionItem,
  SectionList,
  SectionTitle,
} from './SectionDailyConsumptionSummary.styled';
import BlockDailyGoal from 'components/BlockDailyGoal';
import BlockWater from 'components/BlockWater';
import BlockFood from 'components/BlockFood';

const SectionDailyConsumptionSummary = () => {
  return (
    <Section>
      <SectionTitle>Daily consumption summary</SectionTitle>
      <SectionList>
        <SectionItem>
          <BlockDailyGoal />
        </SectionItem>
        <SectionItem>
          <BlockWater />
        </SectionItem>
        <SectionItem>
          <BlockFood />
        </SectionItem>
      </SectionList>
    </Section>
  );
};

export default SectionDailyConsumptionSummary;
