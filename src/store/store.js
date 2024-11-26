import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import productFilterReducer from './slices/productFilterSlice';


export const store = configureStore({
  reducer: {
    products: productReducer,
    productFilter :productFilterReducer
  },
});
