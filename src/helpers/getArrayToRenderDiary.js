export const getArrayToRenderDiary = (foodArray, mealType) => {
  const sortedFoodArray = [...foodArray].sort((a, b) => {
    return a.mealName.localeCompare(b.mealName);
  });

  const result =
    sortedFoodArray.length <= 3
      ? [
          ...sortedFoodArray,
          ...Array(1).fill({
            mealType,
            showButton: true,
          }),
          ...Array(3 - sortedFoodArray.length).fill({}),
        ]
      : [
          ...sortedFoodArray,
          ...Array(1).fill({
            mealType,
            showButton: true,
          }),
        ];

  return result;
};
