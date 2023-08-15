import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./teachersOperations";

const initialState = {
  teachers: [],
  isLoading: false,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.teachers = actions.payload;
      })
      .addCase(getTeachers.rejected, (state, actions) => {
        state.isLoading = false;
      });
  },
});

export default teachersSlice.reducer;
