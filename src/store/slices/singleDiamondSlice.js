import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: {},
    loading: false,
    error: null,
    pageInfo: null,
  },
  reducers: {
    fetchSingleDiamondStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSingleDiamondSuccess: (state, action) => {
      const { product } = action.payload;

      state.loading = false;
        // Replace products
        state.product = product;

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