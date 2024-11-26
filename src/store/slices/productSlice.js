import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
    pageInfo: null,
    activeFilter: null, // Tracks the currently open filter: 'metal', 'shape', or 'price'
    productData : {},
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
    addProduct(state,action) {
      state.productData = action.payload; // Close all filters
    },
  }
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  openFilter, closeFilter,
  addProduct
} = productSlice.actions;

export default productSlice.reducer;