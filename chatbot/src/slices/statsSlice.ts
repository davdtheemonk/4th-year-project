import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import toast from 'react-hot-toast'
import {  ReportsApiState } from "../myTypes";



const initialState: ReportsApiState = {
    reports:null,
    report:null ,
    status: "idle",
    error: null,
  };




export const getStatistics = createAsyncThunk(
  "/statistics/reports",
  async () => {
    const storedUserInfo = localStorage.getItem("userInfo")
    const token = storedUserInfo ? JSON.parse(storedUserInfo).data : null;
    axiosInstance.defaults.headers["x-auth-token"] = token
   
    const response = await axiosInstance.get(
      `/statistics/reports`
    );
   
    return response.data.data;
  }
);

const statsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

    .addCase(getStatistics.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "ad";
    })

    .addCase(getStatistics.pending, (state, action) => {
        state.status = "loading";
      state.error = null
    })
 
    .addCase(getStatistics.fulfilled, (state, action) => {
        state.status = "idle";
        state.reports = action.payload;
      })
  },
});

export default statsSlice.reducer;