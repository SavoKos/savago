import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: '',
  checkin: '',
  checkout: '',
  children: 0,
  rooms: 1,
  adults: 1,
  searchType: 'locations',
};

export const pageSlice = createSlice({
  name: 'searchInfo',
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
    children: (state, { payload }) => {
      state.children = payload;
    },
    adults: (state, { payload }) => {
      state.adults = payload;
    },
    rooms: (state, { payload }) => {
      state.rooms = payload;
    },
    searchType: (state, { payload }) => {
      state.searchType = payload;
    },
  },
});

export const {
  changeDestination,
  checkin,
  checkout,
  children,
  adults,
  rooms,
  searchType,
} = pageSlice.actions;

export default pageSlice.reducer;
