import { createSlice } from '@reduxjs/toolkit';

// Helper function to load products from localStorage
const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem('productTabs');
  return storedProducts ? JSON.parse(storedProducts) : []; // Return parsed products or empty array if not found
};

const initialState = {
  products: loadProductsFromLocalStorage()
};

const tabManageProduct = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
      localStorage.setItem('productTabs', JSON.stringify(state.products)); // Save the updated array to localStorage
    },
  },
});

export const {
  addProduct,
} = tabManageProduct.actions;

export default tabManageProduct.reducer;
