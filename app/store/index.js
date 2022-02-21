import { configureStore } from '@reduxjs/toolkit';
import  employeesReducer  from '../slices/emloyeesSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
    reducer: {
      employees: employeesReducer,
    },
    devTools: true
  });
  


export const wrapper = createWrapper(makeStore);