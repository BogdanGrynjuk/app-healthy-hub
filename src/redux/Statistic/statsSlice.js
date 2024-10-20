import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statsOperations';

const statisticInitialState = {
  info: {},
  error: null,
};

const statisticSlice = createSlice({
  name: 'stats',
  initialState: statisticInitialState,
  extraReducers: builder => {
    builder
      .addCase(getStatistic.pending, state => {
        state.error = null;
      })
      .addCase(getStatistic.fulfilled, (state, { payload }) => {
        state.info = payload;
      })
      .addCase(getStatistic.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const statisticReducer = statisticSlice.reducer;
