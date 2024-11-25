import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMetal: "",
  shape: "",
  price: "",
  page: 1,
  activeFilter: null, // Tracks the currently open filter: 'metal', 'shape', or 'price'
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
    openFilter(state, action) {
      const { filter } = action.payload;

      if (state.activeFilter === filter) {
        state.activeFilter = null; // Close the currently open filter
      } else {
        // Otherwise, set the new filter as active and close any other filter
        state.activeFilter = filter;
      }
    },
    closeFilter(state) {
      state.activeFilter = null; // Close all filters
    },
  },
});

export const { setFilter, clearFilter, resetFilters, openFilter, closeFilter } = filterSlice.actions;
export default filterSlice.reducer;
