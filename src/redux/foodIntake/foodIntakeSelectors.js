import { createSelector } from '@reduxjs/toolkit';

import {
  calcDailyWaterIntake,
  calcNutrientGoal,
  calcPercent,
  calcRemainder,
  calcStatistics,
  calcSurplus,
} from 'helpers/calculations';

export const selectDailyWaterGoal = createSelector(
  [state => state.auth.user.weight],
  weight => calcDailyWaterIntake(weight)
);

export const selectConsumedWaterAmount = state =>
  state.foodIntake?.waterIntake || 0;

export const selectWaterConsumptionPercentage = createSelector(
  [selectDailyWaterGoal, selectConsumedWaterAmount],
  (waterGoal, consumedWaterMl) => calcPercent(waterGoal, consumedWaterMl) + '%'
);

export const selectWaterRemainingToGoal = createSelector(
  [selectDailyWaterGoal, selectConsumedWaterAmount],
  (waterGoal, consumedWaterMl) => calcRemainder(waterGoal, consumedWaterMl)
);

export const selectWaterExcess = createSelector(
  [selectDailyWaterGoal, selectConsumedWaterAmount],
  (waterGoal, consumedWaterMl) => calcSurplus(waterGoal, consumedWaterMl)
);

export const selectExceededWaterLimit = createSelector(
  [selectDailyWaterGoal, selectConsumedWaterAmount],
  (waterGoal, consumedWaterMl) => consumedWaterMl > waterGoal
);

export const selectNutrientSums = createSelector(
  [state => state.foodIntake.items],
  foodIntakeItems => {
    const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    const nutrientSums = mealCategories.map(category => ({
      mealType: category,
      carbohydrates: 0,
      protein: 0,
      fat: 0,
    }));

    foodIntakeItems.forEach(item => {
      const { mealType, carbohydrates, protein, fat } = item;
      const mealIndex = mealCategories.indexOf(mealType);
      if (mealIndex !== -1) {
        nutrientSums[mealIndex].carbohydrates += carbohydrates;
        nutrientSums[mealIndex].protein += protein;
        nutrientSums[mealIndex].fat += fat;
      }
    });

    return nutrientSums;
  }
);

export const selectFoodStatistics = createSelector(
  [
    state => state.foodIntake.items,
    state => state.auth.user.BMR,
    state => state.auth.user.goal,
  ],
  (items, BMR, userGoal) => {
    const { caloriesFact, carbsFact, proteinFact, fatFact } = items.reduce(
      (acc, { carbohydrates, protein, fat, calories }) => {
        acc.caloriesFact += calories;
        acc.carbsFact += carbohydrates;
        acc.proteinFact += protein;
        acc.fatFact += fat;
        return acc;
      },
      { caloriesFact: 0, carbsFact: 0, proteinFact: 0, fatFact: 0 }
    );

    const caloriesGoal = BMR;
    const { carbsGoal, proteinGoal, fatGoal } = calcNutrientGoal(BMR, userGoal);

    return {
      Calories: calcStatistics(caloriesGoal, caloriesFact),
      Carbohydrates: calcStatistics(carbsGoal, carbsFact),
      Protein: calcStatistics(proteinGoal, proteinFact),
      Fat: calcStatistics(fatGoal, fatFact),
    };
  }
);

// export const selectFoodIntakeByCategory = createSelector(
//   state => state.foodIntake.items,
//   items => {
//     const categorizedItems = {
//       Breakfast: [],
//       Lunch: [],
//       Dinner: [],
//       Snack: [],
//     };

//     items.forEach(item => {
//       const mealType = item.mealType;
//       if (categorizedItems[mealType]) {
//         categorizedItems[mealType].push(item);
//       }
//     });

//     return Object.keys(categorizedItems).map(type => ({
//       type,
//       data: categorizedItems[type],
//     }));
//   }
// );

// export const selectFoodIntakeByMealType = createSelector(
//   state => state.foodIntake.items,
//   items => {
//     const categorizedItems = {
//       Breakfast: [],
//       Lunch: [],
//       Dinner: [],
//       Snack: [],
//     };

//     items.forEach(item => {
//       const mealType = item.mealType;
//       if (categorizedItems[mealType]) {
//         categorizedItems[mealType].push(item);
//       }
//     });

//     return categorizedItems;
//   }
// );
