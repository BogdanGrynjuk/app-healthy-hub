import loseFatMen from 'images/icons/lose-fat-image-men.svg';
import loseFatGirl from 'images/icons/lose-fat-image-girl.svg';
import maintainMen from 'images/icons/maintain-image-men.svg';
import maintainGirl from 'images/icons/maintain-image-girl.svg';
import muscle from 'images/icons/gain-muscle.svg';

export const getGoalIcon = (gender, goal) => {
  const icons = {
    Female: {
      'Lose fat': loseFatGirl,
      Maintain: maintainGirl,
      'Gain Muscle': muscle,
    },
    Male: {
      'Lose fat': loseFatMen,
      Maintain: maintainMen,
      'Gain Muscle': muscle,
    },
  };

  return icons[gender]?.[goal] || muscle;
};
