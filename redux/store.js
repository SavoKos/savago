import { configureStore } from '@reduxjs/toolkit';
import searchInfoReducer from './searchInfoSlice';

export const store = configureStore({
  reducer: {
    destination: searchInfoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
