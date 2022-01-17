import { configureStore } from '@reduxjs/toolkit';
import desinationReducer from './desinationSlice';

export const store = configureStore({
  reducer: {
    destination: desinationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
