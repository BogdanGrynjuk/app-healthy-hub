import { useSelector } from 'react-redux';

import { Container } from './Diary.styled';

import { selectFoodIntakeByCategory } from 'redux/foodIntake/foodIntakeSelectors';
import SectionOfDiary from 'components/Sections/SectionOfDiary';
import { MEAL_TYPE_ICONS_MAP } from 'constants/iconsMaps';

const Diary = () => {
  const foodIntakeByCategory = useSelector(selectFoodIntakeByCategory);

  return (
    <Container>
      {foodIntakeByCategory.map(({ type, data }) => {
        return (
          <SectionOfDiary
            key={type}
            mealType={type}
            imageSrc={MEAL_TYPE_ICONS_MAP[type]}
            meals={data}
          />
        );
      })}
    </Container>
  );
};

export default Diary;
