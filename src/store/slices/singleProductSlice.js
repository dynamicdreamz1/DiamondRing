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
    fetchSingleProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSingleProductsSuccess: (state, action) => {
      const { product } = action.payload;

      state.loading = false;
        // Replace products
        state.product = product;

    },
    fetchSingleProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const {
  fetchSingleProductsStart,
  fetchSingleProductsSuccess,
  fetchSingleProductsFailure
} = productSlice.actions;

export default productSlice.reducer;