import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ringsSlice';
import productFilterReducer from './slices/ringsFilterSlice';
import singleProductReducer from './slices/singleRingSlice';
import diamondFilterReducer from './slices/diamondFilterSlice';
import diamondReducer from './slices/diamondSlice';
import singleDiamondReducer from './slices/singleDiamondSlice';
import tabProductSliceReducer from './slices/TabProductSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    productFilter: productFilterReducer,
    singleProduct: singleProductReducer,
    diamondFilter: diamondFilterReducer,
    diamond: diamondReducer,
    singleDiamond: singleDiamondReducer,
    getTabsProduct : tabProductSliceReducer
  },
});
