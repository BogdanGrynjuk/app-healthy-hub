import { useSelector } from 'react-redux';
import {
  Section,
  SectionHeader,
  SectionTitle,
  LinkToDiaryPage,
  SectionList,
} from './SectionDiary.styled';

import BlockMealDetail from 'components/BlockMealDetail';
import { selectNutrientSums } from 'redux/foodIntake/foodIntakeSelectors';
import { MEAL_TYPE_ICONS_MAP } from 'constants/iconsMaps';

const SectionDiary = () => {
  const nutrientSums = useSelector(selectNutrientSums);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Diary</SectionTitle>
        <LinkToDiaryPage to="/diary">See more</LinkToDiaryPage>
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
