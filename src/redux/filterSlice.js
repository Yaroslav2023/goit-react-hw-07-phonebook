import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChanges: (state, action) => ({
      ...state,
      searchQuery: action.payload,
    }),
  },
});

export const { filterChanges } = filterSlice.actions;
export default filterSlice.reducer;
