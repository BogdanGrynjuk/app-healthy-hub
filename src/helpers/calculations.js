export const calculateNutrientGoal = (BMR, goal) => {
  let proteinPercentage, fatPercentage;

  switch (goal) {
    case 'Lose fat':
      proteinPercentage = 0.25;
      fatPercentage = 0.2;
      break;
    case 'Gain Muscle':
      proteinPercentage = 0.3;
      fatPercentage = 0.2;
      break;
    case 'Maintain':
      proteinPercentage = 0.2;
      fatPercentage = 0.25;
      break;
    default:
      proteinPercentage = 0.25;
      fatPercentage = 0.2;
  }

  const carbsPercentage = 1 - (proteinPercentage + fatPercentage);

  const carbsGoal = Math.round((carbsPercentage * BMR) / 4);
  const proteinGoal = Math.round((proteinPercentage * BMR) / 4);
  const fatGoal = Math.round((fatPercentage * BMR) / 9);

  return { proteinGoal, fatGoal, carbsGoal };
};

export const calcPercent = (goal, consumed) => {
  const res = Math.floor((consumed * 100) / goal);
  return res;
};

export const calcRemainder = (goal, consumed) => {
  const res = goal - consumed;
  return res;
};

export const calcSurplus = (goal, consumed) => {
  const res = 0 - calcRemainder(goal, consumed);
  return res;
};
