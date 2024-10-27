import { createSlice } from '@reduxjs/toolkit';

import {
  getMyFoodIntake,
  postMyFoodIntake,
  postMyWaterIntake,
  updateMyFoodIntake,
} from './foodIntakeOperations';

const initialState = {
  items: [],
  waterIntake: 0,
  error: null,
  notifications: {
    water: false,
    calories: false,
    fat: false,
    carbohydrates: false,
    protein: false,
  },
};

const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  reducers: {
    resetFoodIntakeState: () => initialState,
    setNotification(state, action) {
      const { type, value } = action.payload;
      state.notifications[type] = value;
    },
    resetNotifications(state) {
      Object.keys(state.notifications).forEach(key => {
        state.notifications[key] = false;
      });
    },
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

export const { setNotification, resetNotifications, resetFoodIntakeState } =
  foodIntakeSlice.actions;
export const foodIntakeReducer = foodIntakeSlice.reducer;
