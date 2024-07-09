import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './expensesReducer';


export const store = configureStore({
  reducer: {
    // Define a top-level state field named `expenses`, handled by `expensesReducer`
    expensesReducer: expensesReducer,
  },
});
