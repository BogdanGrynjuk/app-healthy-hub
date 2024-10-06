import PropTypes from 'prop-types';

import { Section } from './SectionOfDiary.styled';

import BlockGeneralInfoOfDiarySection from 'components/BlockGeneralInfoOfDiarySection';
import BlockDetailedInfoOfDiarySection from 'components/BlockDetailedInfoOfDiarySection';

const SectionOfDiary = ({ mealType, imageSrc, meals }) => {
  return (
    <Section>
      <BlockGeneralInfoOfDiarySection mealType={mealType} imageSrc={imageSrc} />

      <BlockDetailedInfoOfDiarySection
        mealType={mealType}
        imageSrc={imageSrc}
        meals={meals}
      />
    </Section>
  );
};

SectionOfDiary.propTypes = {
  mealType: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      mealName: PropTypes.string.isRequired,
      carbonohidrates: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SectionOfDiary;
