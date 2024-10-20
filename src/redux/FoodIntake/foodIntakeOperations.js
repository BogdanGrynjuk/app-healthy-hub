import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosAuth } from 'helpers/network';
import { toast } from 'react-toastify';

export const getMyFoodIntake = createAsyncThunk(
  'foodIntake/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('user/food-intake');

      return res.data;
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error.response.data.message);
      return rejectWithValue(
        error.response.data.message || 'Something went wrong'
      );
    }
  }
);

export const postMyFoodIntake = createAsyncThunk(
  'foodIntake/post',
  async (foodIntake, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('user/food-intake', foodIntake);
      return res.data;
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error.response.data.message);
      return rejectWithValue(
        error.response.data.message || 'Something went wrong'
      );
    }
  }
);

export const updateMyFoodIntake = createAsyncThunk(
  'foodIntake/update',
  async ({ id, updatedFoodIntake }, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.put(
        `user/food-intake/${id}`,
        updatedFoodIntake
      );
      return res.data;
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error.response.data.message);
      return rejectWithValue(
        error.response.data.message || 'Something went wrong'
      );
    }
  }
);

export const postMyWaterIntake = createAsyncThunk(
  'waterIntake/post',
  async (waterIntake, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('user/water-intake', waterIntake);
      return res.data.volume;
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error.response.data.message);
      return rejectWithValue(
        error.response.data.message || 'Something went wrong'
      );
    }
  }
);
