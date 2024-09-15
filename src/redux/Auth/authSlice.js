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
import { APP_STATUS } from 'constants/appStatus';

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
  appStatus: APP_STATUS.loading,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAppStatus: (state, { payload }) => {
      state.appStatus = payload;
    },
    setNewUserName: (state, { payload }) => {
      state.user.name = payload;
    },
    setNewUserEmail: (state, { payload }) => {
      state.user.email = payload;
    },
    setNewUserPassword: (state, { payload }) => {
      state.user.password = payload;
    },
    setNewUserGoal: (state, { payload }) => {
      state.user.goal = payload;
    },
    setNewUserAge: (state, { payload }) => {
      state.user.age = payload;
    },
    setNewUserGender: (state, { payload }) => {
      state.user.gender = payload;
    },
    setNewUserHeight: (state, { payload }) => {
      state.user.height = payload;
    },
    setNewUserWeight: (state, { payload }) => {
      state.user.weight = payload;
    },
    setNewUserActivity: (state, { payload }) => {
      state.user.physicalActivityRatio = payload;
    },
  },
  extraReducers: builder => {
    builder
      // refresh
      .addCase(refresh.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.appStatus = APP_STATUS.idle;
        state.error = null;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.isRefreshing = false;
        if (payload === 401) {
          state.token = null;
        }
        state.error = payload;
      })

      // signUp
      .addCase(signUp.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.appStatus = APP_STATUS.idle;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.error = payload;
      })

      // signIn
      .addCase(signIn.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.isLoggedIn = false;
        state.error = payload;
      })

      // logOut
      .addCase(logOut.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.error = payload;
      })

      // updateUser
      .addCase(updateUser.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        for (const key in payload) {
          if (payload.hasOwnProperty(key)) state.user[key] = payload[key];
        }
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.error = payload;
      })

      // checkEmail
      .addCase(checkEmail.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(checkEmail.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
        state.error = null;
      })
      .addCase(checkEmail.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.error = payload;
      })

      // resetPassword
      .addCase(resetPassword.pending, state => {
        state.appStatus = APP_STATUS.loading;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.appStatus = APP_STATUS.idle;
        state.error = payload;
      });
  },
});

export const {
  updateAppStatus,
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
