import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentUser,
  updateUser,
  updateAvatar,
  addWeight,
  updateGoal,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    goal: null,
    gender: null,
    age: null,
    weight: null,
    height: null,
    activity: null,
    // bmr: null,
    // fat: null,
    // protein: null,
    // carbohydrate: null,
    // avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewUserName: (state, action) => {
      state.user.name = action.payload;
    },
    setNewUserEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setNewUserPassword: (state, action) => {
      state.user.password = action.payload;
    },
    setNewUserGoal: (state, action) => {
      state.user.goal = action.payload;
    },
    setNewUserAge: (state, action) => {
      state.user.age = action.payload;
    },
    setNewUserGender: (state, action) => {
      state.user.gender = action.payload;
    },
    setNewUserHeight: (state, action) => {
      state.user.height = action.payload;
    },
    setNewUserWeight: (state, action) => {
      state.user.weight = action.payload;
    },
    setNewUserActivity: (state, action) => {
      state.user.activity = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          password: null,
          goal: null,
          gender: null,
          age: null,
          weight: null,
          height: null,
          activity: null,
          bmr: null,
          fat: null,
          protein: null,
          carbohydrate: null,
          avatarURL: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        // state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(addWeight.fulfilled, (state, action) => {
        state.user.weight = action.payload.weight;
        state.user.bmr = action.payload.bmr;
      })
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.user.goal = action.payload.goal;
        state.user.fat = action.payload.fat;
        state.user.protein = action.payload.protein;
        state.user.carbohydrate = action.payload.carbohydrate;
      });
  },
});

export const {
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
  setNewUserGoal,
  setNewUserAge,
  setNewUserGender,
  setNewUserHeight,
  setNewUserWeight,
  setNewUserActivity,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
