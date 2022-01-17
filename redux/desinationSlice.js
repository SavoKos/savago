import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: '',
  checkin: '',
  checkout: '',
};

export const pageSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    changeDestination: (state, { payload }) => {
      state.destination = payload;
    },
    checkin: (state, { payload }) => {
      state.checkin = payload;
    },
    checkout: (state, { payload }) => {
      state.checkout = payload;
    },
  },
});

export const { changeDestination, checkin, checkout } = pageSlice.actions;

export default pageSlice.reducer;
