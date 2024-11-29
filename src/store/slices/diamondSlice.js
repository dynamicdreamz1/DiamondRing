import { createSlice } from '@reduxjs/toolkit';

const diamondSlice = createSlice({
  name: 'diamonds',
  initialState: {
    diamonds: [],
    loading: false,
    error: null,
    // pageInfo: null,
  },
  reducers: {
    diamondFetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    diamondFetchSuccess: (state, action) => {
      const { diamonds, append } = action.payload;

      state.loading = false;
    //   state.pageInfo = diamonds.pageInfo;
        
      if (append) {
        // Append new diamonds
        state.diamonds = {
          ...diamonds,
          edges: [...state.diamonds.edges, ...diamonds.edges],
        };
      } else {
        // Replace diamonds
        state.diamonds = diamonds;
      }
    },
    diamondFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  diamondFetchStart,
  diamondFetchSuccess,
  diamondFetchFailure,
} = diamondSlice.actions;

export default diamondSlice.reducer;
