import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  logOut,
  updateUser,
  refresh,
  signIn,
  checkEmail,
} from './authOperations';
import { APP_STATUS } from 'constants/appStatus';
import {
  getMyFoodIntake,
  postMyFoodIntake,
  postMyWaterIntake,
  updateMyFoodIntake,
} from 'redux/foodIntake/foodIntake.Operations';

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
  appStatus: APP_STATUS.initialLoading,
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
        state.isRefreshing = false;
        if (payload === 401) {
          state.token = null;
        }
        state.appStatus = APP_STATUS.idle;
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
      .addCase(signUp.rejected, state => {
        state.appStatus = APP_STATUS.idle;
        state.error = 'Something went wrong';
      })

      // signIn
      .addCase(signIn.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;

        state.isLoggedIn = true;
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(signIn.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // logOut
      .addCase(logOut.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(logOut.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logOut.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // updateUser
      .addCase(updateUser.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        for (const key in payload) {
          if (payload.hasOwnProperty(key)) state.user[key] = payload[key];
        }
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(updateUser.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // getMyFoodIntake
      .addCase(getMyFoodIntake.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(getMyFoodIntake.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(getMyFoodIntake.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // updateMyFoodIntake
      .addCase(updateMyFoodIntake.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(updateMyFoodIntake.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(updateMyFoodIntake.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // postMyFoodIntake
      .addCase(postMyFoodIntake.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(postMyFoodIntake.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(postMyFoodIntake.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // postMyWaterIntake
      .addCase(postMyWaterIntake.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(postMyWaterIntake.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(postMyWaterIntake.rejected, state => {
        state.appStatus = APP_STATUS.idle;
      })

      // checkEmail
      .addCase(checkEmail.pending, state => {
        state.appStatus = APP_STATUS.loading;
      })
      .addCase(checkEmail.fulfilled, state => {
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(checkEmail.rejected, (state, { payload }) => {
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
