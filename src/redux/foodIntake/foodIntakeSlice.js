import { createSlice } from '@reduxjs/toolkit';

import {
  getMyFoodIntake,
  postMyFoodIntake,
  postMyWaterIntake,
  updateMyFoodIntake,
} from './foodIntake.Operations';

const initialState = {
  items: [],
  waterIntake: 0,
  error: null,
};

const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  reducers: {
    resetFoodIntakeState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getMyFoodIntake.fulfilled, (state, { payload }) => {
        state.items = payload.items;
        state.waterIntake = payload.waterIntake;
      })
      .addCase(postMyFoodIntake.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(updateMyFoodIntake.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(it => it._id === payload._id);
        state.items[index] = payload;
      })
      .addCase(postMyWaterIntake.fulfilled, (state, { payload }) => {
        state.waterIntake += payload;
      });
  },
});

export const { resetFoodIntakeState } = foodIntakeSlice.actions;
export const foodIntakeReducer = foodIntakeSlice.reducer;
