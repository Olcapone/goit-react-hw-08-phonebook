import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signup = createAsyncThunk("auth/signup", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await axios.post("/auth/logout");
    token.unset();
    return data;
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      console.log("Exit");
      return thunkAPI.rejectWithValue(5);
    }
    token.set(persistToken);

    try {
      const { data } = await axios.get("/users/current");
      return data.body;
    } catch (error) {}
  }
);

export default {
  signup,
  login,
  logout,
  fetchCurrentUser,
};
