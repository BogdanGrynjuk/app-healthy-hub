import { createSlice } from '@reduxjs/toolkit';
import { getRecommendedFood } from './recommendedFoodOperations';

const initialState = {
  info: [],
  error: null,
};

const recommendedFoodSlice = createSlice({
  name: 'recommendedFood',
  initialState,

  extraReducers: builder => {
    builder.addCase(getRecommendedFood.fulfilled, (state, { payload }) => {
      state.info = payload;
    });
  },
});

export const recommendedFoodReducer = recommendedFoodSlice.reducer;
