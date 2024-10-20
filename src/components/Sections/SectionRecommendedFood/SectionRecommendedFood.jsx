import {
  Section,
  SectionTitle,
  LinkToRecommendedFoodPage,
  LinkText,
  LinkImage,
  SectionHeader,
} from './SectionRecommendedFood.styled';

import arrowRight from 'images/icons/arrow-right-open.svg';
import ListRecommendedFood from 'components/ListRecommendedFood';

export const SectionRecommendedFood = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Recommended food</SectionTitle>
        <LinkToRecommendedFoodPage to="/recommended-food">
          <LinkText>See more</LinkText>
          <LinkImage src={arrowRight} alt="Arrow right" />
        </LinkToRecommendedFoodPage>
      </SectionHeader>
      <ListRecommendedFood itemLimit={4} />
    </Section>
  );
};

export default SectionRecommendedFood;
