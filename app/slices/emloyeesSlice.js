import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { fetchEmployeeList } from '../api/emloyeesApi';

const initialState = {
  emloyeeList: [],
  filteredEmployeeList: [],
  filterStatus: false
}

export const EmployeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployeeList: (state, action) => {
      state.emloyeeList = action.payload
    },
    setFilteredEmployeeList: (state, action) => {
      state.filteredEmployeeList = action.payload
      state.filterStatus = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {

      if (!action.payload.employees.emloyeeList) {
        return state;
      }
      state.emloyeeList = action.payload.employees.emloyeeList;

    })
  }
})

export const getEmployeeListAsync = createAsyncThunk(
  'employees/fetchEmployeeList',
  async () => {
    let response = await fetchEmployeeList()
    return response
  }
);


export const { setEmployeeList, setFilteredEmployeeList } = EmployeesSlice.actions

export const selectEmployeeList = () => (state) => state.employees.emloyeeList;
export const selectFilteredEmployeeList = () => (state) => state.employees.filteredEmployeeList;
export const selectFilterStatus = () => (state) => state.employees.filterStatus;

export default EmployeesSlice.reducer;
