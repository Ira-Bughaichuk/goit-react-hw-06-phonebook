import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filterContactsAction(_, { payload }) {
      return payload;
    },
  },
});
export const { filterContactsAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducers;
