import { createSelector } from '@reduxjs/toolkit';

import { calcNutrientGoal, calcStatistics } from 'helpers/calculations';

export const selectWaterIntake = state => state.foodIntake?.waterIntake || 0;

// export const selectNutrientSums = createSelector(
//   state => state.foodIntake.items,
//   foodIntakes => {
//     const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

//     const mealSumsArray = mealTypes.map(mealType => ({
//       mealType,
//       carbonohidrates: 0,
//       protein: 0,
//       fat: 0,
//     }));

//     foodIntakes.forEach(item => {
//       const { mealType, carbonohidrates, protein, fat } = item;

//       const index = mealTypes.indexOf(mealType);
//       if (index !== -1) {
//         mealSumsArray[index].carbonohidrates += carbonohidrates;
//         mealSumsArray[index].protein += protein;
//         mealSumsArray[index].fat += fat;
//       }
//     });
//     // console.log(mealSumsArray);
//     return mealSumsArray;
//   }
// );

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
