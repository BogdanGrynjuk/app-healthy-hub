import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosAuth } from 'helpers/network';
import { toast } from 'react-toastify';

export const getRecommendedFood = createAsyncThunk(
  'recommendedFood/getRecommendedFood',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosAuth.get('/user/recomended-food');
      return data;
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error.response.data.message);
      return rejectWithValue(
        error.response.data.message || 'Something went wrong'
      );
    }
  }
);
