import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  logOut,
  updateUser,
  refresh,
  signIn,
  checkEmail,
  resetPassword,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    physicalActivityRatio: null,
    avatarURL: null,
    BMR: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    updateAppStatus: (state, { payload }) => {
      state.appStatus = payload;
    },
    setUserName: (state, { payload }) => {
      state.user.name = payload;
    },
    setUserEmail: (state, { payload }) => {
      state.user.email = payload;
    },
    setUserPassword: (state, { payload }) => {
      state.user.password = payload;
    },
    setUserGoal: (state, { payload }) => {
      state.user.goal = payload;
    },
    setUserAge: (state, { payload }) => {
      state.user.age = payload;
    },
    setUserGender: (state, { payload }) => {
      state.user.gender = payload;
    },
    setUserHeight: (state, { payload }) => {
      state.user.height = payload;
    },
    setUserWeight: (state, { payload }) => {
      state.user.weight = payload;
    },
    setUserActivity: (state, { payload }) => {
      state.user.physicalActivityRatio = payload;
    },
  },
  extraReducers: builder => {
    builder
      // refresh
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      // signUp
      .addCase(signUp.pending, state => {
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.error = payload;
      })

      // signIn
      .addCase(signIn.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
      })

      // logOut
      .addCase(logOut.pending, state => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
      })

      // updateUser
      .addCase(updateUser.pending, state => {
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        for (const key in payload) {
          if (payload.hasOwnProperty(key)) state.user[key] = payload[key];
        }
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.error = payload;
      })

      // checkEmail
      .addCase(checkEmail.pending, state => {
        state.error = null;
      })
      .addCase(checkEmail.fulfilled, state => {
        state.error = null;
      })
      .addCase(checkEmail.rejected, (state, { payload }) => {
        state.error = payload;
      })

      // resetPassword
      .addCase(resetPassword.pending, state => {
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, state => {
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const {
  clearError,
  updateAppStatus,
  setUserName,
  setUserEmail,
  setUserPassword,
  setUserGoal,
  setUserAge,
  setUserGender,
  setUserHeight,
  setUserWeight,
  setUserActivity,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
