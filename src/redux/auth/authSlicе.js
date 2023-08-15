import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registrationUser } from "./authOperation";

const initialState = {
  userId: null,
  name: null,
  email: null,
  token: null,
  error: null,
  isAuth: false,
  isAuthLoading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
        state.name = action.payload.displayName;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isAuthLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
        state.name = action.payload.displayName;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isAuthLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.userId = null;
        state.name = null;
        state.email = null;
        state.token = null;
        state.isAuth = false;
        state.isAuthLoading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
      });
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
