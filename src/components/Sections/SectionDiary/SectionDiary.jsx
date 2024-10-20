import { useSelector } from 'react-redux';
import {
  Section,
  SectionHeader,
  SectionTitle,
  LinkToDiaryPage,
  SectionList,
  LinkImage,
  LinkText,
} from './SectionDiary.styled';

import arrowRight from 'images/icons/arrow-right-open.svg';
import BlockMealDetail from 'components/BlockMealDetail';
import { selectNutrientSums } from 'redux/FoodIntake/foodIntakeSelectors';
import { MEAL_TYPE_ICONS_MAP } from 'constants/iconsMaps';

const SectionDiary = () => {
  const nutrientSums = useSelector(selectNutrientSums);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Diary</SectionTitle>
        <LinkToDiaryPage to="/diary">
          <LinkText>See more</LinkText>
          <LinkImage src={arrowRight} alt="Arrow right" />
        </LinkToDiaryPage>
      </SectionHeader>
      <SectionList>
        {nutrientSums.map(item => (
          <li key={item.mealType}>
            <BlockMealDetail
              key={item.mealType}
              info={item}
              imageSrc={MEAL_TYPE_ICONS_MAP[item.mealType]}
            />
          </li>
        ))}
      </SectionList>
    </Section>
  );
};

export default SectionDiary;
