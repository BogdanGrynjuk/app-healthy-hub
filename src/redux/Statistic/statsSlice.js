import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statsOperations';
import { APP_STATUS } from 'constants/appStatus';

const statisticInitialState = {
  info: {},
  appStatus: APP_STATUS.loading,
  error: null,
};

const statisticSlice = createSlice({
  name: 'stats',
  initialState: statisticInitialState,
  extraReducers: builder => {
    builder
      .addCase(getStatistic.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(getStatistic.fulfilled, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.info = payload;
      })
      .addCase(getStatistic.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.error = payload;
      });
  },
});

export const statisticReducer = statisticSlice.reducer;
