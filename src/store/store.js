import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import productFilterReducer from './slices/productFilterSlice';
import singleProductReducer from './slices/singleProductSlice';
import diamondFilterReducer from './slices/diamondFilterSlice';
import diamondReducer from './slices/diamondSlice';





export const store = configureStore({
  reducer: {
    products: productReducer,
    productFilter :productFilterReducer,
    singleProduct : singleProductReducer,
    diamondFilter : diamondFilterReducer,
    diamond : diamondReducer
  },
});
