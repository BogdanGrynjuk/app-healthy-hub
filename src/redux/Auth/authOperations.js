import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { getMyFoodIntake } from '../FoodIntake/foodIntake.Operations';

import {
  axiosAuth,
  resetGlobalAuthHeader,
  setGlobalAuthHeader,
} from 'helpers/network';
import { sleep } from 'helpers/sleep';
import toastifyMessage from 'helpers/toastify';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/signup', credentials);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.details) {
        toastifyMessage('error', error.response.data.details);
      }
      return rejectWithValue(error.response.data.details);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/signin', credentials);
      setGlobalAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.message) {
        toastifyMessage('error', error.response.data.message);
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const tokenCurrent = state.auth.token;

  if (tokenCurrent === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user: No token');
  }

  try {
    setGlobalAuthHeader(tokenCurrent);
    const response = await axiosAuth.get('auth/current');

    await thunkAPI.dispatch(getMyFoodIntake());
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response.status === 401) {
      await sleep(500);
      toastifyMessage(
        'error',
        'Your session has expired. Please log in again.'
      );
      return thunkAPI.rejectWithValue('Session expired');
    }
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('auth/logout');
      resetGlobalAuthHeader();
      return res.status;
    } catch (error) {
      toastifyMessage('error', 'Something went wrong!');
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (resetData, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/password', resetData);
      return res.data;
    } catch (error) {
      toastifyMessage('error', 'An error occurred during password reset.');
      return rejectWithValue(
        error.response.data.message || 'Something went wrong!'
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (fieldsToUpdate, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const field in fieldsToUpdate) {
        formData.append(field, fieldsToUpdate[field]);
      }

      const res = await axiosAuth.patch('user/info', formData);
      toast.success('Profile updated!');

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.message) {
        toastifyMessage('error', error.response.data.message);
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const checkEmail = createAsyncThunk(
  'auth/checkEmail',
  async (email, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/email', { email });
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.status === 409) {
        toastifyMessage('error', error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(
        error.response.data.message || 'Something went wrong'
      );
    }
  }
);
