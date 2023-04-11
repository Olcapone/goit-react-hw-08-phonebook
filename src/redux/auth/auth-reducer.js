import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { id: null, name: null, email: null, subscription: "starter" },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.signup.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    })
      .addCase(authOperations.login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isLoggedIn = true;
      })
  },
});

export default authSlice.reducer;
