import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    diamond: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchSingleDiamondStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSingleDiamondSuccess: (state, action) => {
      const { diamond } = action.payload;

      state.loading = false;
      // Replace products
      state.diamond = diamond?.data?.diamonds_by_query?.items[0];

    },
    fetchSingleDiamondFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const {
  fetchSingleDiamondStart,
  fetchSingleDiamondSuccess,
  fetchSingleDiamondFailure
} = productSlice.actions;

export default productSlice.reducer;