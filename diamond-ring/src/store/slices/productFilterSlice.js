import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMetal: "",
  shape: "",
  price: "",
  page: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload;
      state[key] = value; // Update only the specified filter key
    },
    clearFilter(state, action) {
      const { key } = action.payload;
      state[key] = ""; // Clear a specific filter
    },
    resetFilters(state) {
      Object.keys(state).forEach(key => (state[key] = key === "page" ? 1 : "")); // Reset all filters except page
    },
  },
});

export const { setFilter, clearFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
