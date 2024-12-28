import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import customersReducer from './slices/customersSlice';
import ordersReducer from './slices/ordersSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    orders: ordersReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;