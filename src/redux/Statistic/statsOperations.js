import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosAuth } from 'helpers/network';
import toastifyMessage from 'helpers/toastify';
import { setLoginStatus } from 'redux/Auth/authSlice';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',
  async (period, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosAuth.get(`/user/statistics?range=${period}`);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong';

      if (error instanceof AxiosError && errorMessage === 'Not authorized') {
        toastifyMessage(
          'error',
          'Your session has expired. Please log in again.'
        );
        dispatch(setLoginStatus(false));
      }

      console.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
