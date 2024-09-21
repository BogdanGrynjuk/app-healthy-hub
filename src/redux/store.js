import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './Auth/authSlice';
import { statsReducer } from './Statistics/statisticsSlice';

import { foodsReducer } from './Foods/foodsSlice';
import { foodIntakeReducer } from './foodIntake/foodIntakeSlice';
import { statisticReducer } from './Stats/statsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    foodIntake: foodIntakeReducer,
    statistic: statisticReducer,

    // !!! Слід видалити редюсери Stats water, foods
    stats: statsReducer,
    foods: foodsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
