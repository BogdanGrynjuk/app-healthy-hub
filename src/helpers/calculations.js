import {
  NUTRITION_GOAL_MAP,
  WATER_CONSUMPTION_RATE_ML_PER_KG,
} from 'constants/constants';

export const calcDailyWaterIntake = weight => {
  const intake = weight * WATER_CONSUMPTION_RATE_ML_PER_KG;
  const roundedIntake = Math.round(intake / 10) * 10;
  return roundedIntake;
};

export const calcNutrientGoal = (BMR, goal) => {
  const { protein: proteinPercentage, fat: fatPercentage } =
    NUTRITION_GOAL_MAP[goal];
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

export const calcStatistics = (goal, consumed) => ({
  consumptionGoal: goal,
  consumedAmount: consumed,
  remainingAmount: calcRemainder(goal, consumed),
  consumptionPercentage: calcPercent(goal, consumed),
  excessAmount: calcSurplus(goal, consumed),
  isGoalExceeded: goal < consumed,
});
