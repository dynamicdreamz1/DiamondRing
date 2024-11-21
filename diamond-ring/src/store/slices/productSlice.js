import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
    pageInfo: null
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      const { products, append } = action.payload;
      
      state.loading = false;
      state.pageInfo = products.pageInfo;
      
      if (append) {
        // Append new products
        state.products = {
          ...products,
          edges: [...state.products.edges, ...products.edges]
        };
      } else {
        // Replace products
        state.products = products;
      }
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure
} = productSlice.actions;

export default productSlice.reducer;