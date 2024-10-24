import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statsOperations';

const statisticInitialState = {
  info: {},
  isLoading: false,
  error: null,
};

const statisticSlice = createSlice({
  name: 'stats',
  initialState: statisticInitialState,
  extraReducers: builder => {
    builder
      .addCase(getStatistic.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistic.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.info = payload;
      })
      .addCase(getStatistic.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const statisticReducer = statisticSlice.reducer;
