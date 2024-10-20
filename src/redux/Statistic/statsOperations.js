import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosAuth } from 'helpers/network';
import toastifyMessage from 'helpers/toastify';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',
  async (period, { rejectWithValue }) => {
    try {
      const { data } = await axiosAuth.get(`/user/statistics?range=${period}`);
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.message) {
        toastifyMessage('error', error.response.data.message);
      }
      console.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
