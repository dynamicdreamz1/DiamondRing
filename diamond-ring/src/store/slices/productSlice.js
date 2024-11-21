import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
    hasNextPage: false,
    endCursor: null,
    sortOrder: 'lowToHigh' // Default sort order
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      const { products } = action.payload;
      
      // For initial load or first page
      if (!state.endCursor) {
        state.products = products.edges.map(edge => edge.node);
      } else {
        // For load more, append new products
        state.products = [
          ...state.products, 
          ...products.edges.map(edge => edge.node)
        ];
      }
      
      state.hasNextPage = products.pageInfo.hasNextPage;
      state.endCursor = products.pageInfo.endCursor;
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    }
  }
});


export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  setSortOrder
} = productSlice.actions;

export default productSlice.reducer;