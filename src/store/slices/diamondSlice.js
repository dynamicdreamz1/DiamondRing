import { createSlice } from '@reduxjs/toolkit';

const diamondSlice = createSlice({
  name: 'diamonds',
  initialState: {
    diamonds: [],
    loading: false,
    error: null,
  },
  reducers: {
    diamondsFetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    diamondsFetchSuccess: (state, action) => {
      const { diamonds, append } = action.payload;      
      state.loading = false; 
      
      if (append) {     
        state.diamonds = [...state.diamonds, ...diamonds.data.diamonds_by_query.items]
      } else {
        state.diamonds = diamonds.data.diamonds_by_query.items;
      }
    },
    diamondsFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  diamondsFetchStart,
  diamondsFetchSuccess,
  diamondsFetchFailure,
} = diamondSlice.actions;

export default diamondSlice.reducer;
