import { createSlice } from '@reduxjs/toolkit';

// Helper function to load tabs from localStorage
const loadTabsFromLocalStorage = () => {
  const storedTabs = localStorage.getItem('productTabs');
  return storedTabs ? JSON.parse(storedTabs) : null; // Return parsed tabs or null if not found
};

const initialState = {
  tabs: loadTabsFromLocalStorage() || [], // Set initial state to data from localStorage (or empty array if none)
};

const tabManageProduct = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductTabs(state, action) {

      const { diamond, ring, currentStep, finelProduct } = action.payload;

      // Merge the new keys into the existing tabs object
      state.tabs = {
        ...state.tabs,
        diamond: diamond,
        ring: ring,
        currentStep: currentStep,
        finelProduct: finelProduct
      };

      // Save the updated tabs data to localStorage
      localStorage.setItem('productTabs', JSON.stringify(state.tabs));
    },
  },
});

export const {
  addProductTabs,
} = tabManageProduct.actions;

export default tabManageProduct.reducer;
