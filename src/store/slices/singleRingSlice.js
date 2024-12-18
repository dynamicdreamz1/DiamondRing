import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchSingleRingStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSingleRingSuccess: (state, action) => {
      const { product } = action.payload;
      state.loading = false;
      state.product = product;
    },
    fetchSingleRingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const {
  fetchSingleRingStart,
  fetchSingleRingSuccess,
  fetchSingleRingFailure
} = productSlice.actions;

export default productSlice.reducer;