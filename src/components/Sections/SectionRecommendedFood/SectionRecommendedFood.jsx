import {
  Section,
  SectionTitle,
  ButtonSeeMore,
} from './SectionRecommendedFood.styled';
import ListRecommendedFood from 'components/ListRecommendedFood';

export const SectionRecommendedFood = () => {
  return (
    <Section>
      <SectionTitle>Recommended food</SectionTitle>
      <ListRecommendedFood itemLimit={4} />
      <ButtonSeeMore to="/recommended-food">See more</ButtonSeeMore>
    </Section>
  );
};

export default SectionRecommendedFood;
