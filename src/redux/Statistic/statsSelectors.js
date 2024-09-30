import { createSelector } from '@reduxjs/toolkit';

export const selectStatisticInfo = state => state.statistic.info;

export const selectStatisticPerYear = createSelector(
  [selectStatisticInfo],
  statistic => statistic.weight
);
