import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services";

export const loginAsnycThunk = createAsyncThunk(
  "auth/signIn",
  async (payload) => {
    const res = await login(payload);

    return res;
  }
);

const initialState = {
  token: "",
  isLoggedin: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedin = !!state.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsnycThunk.fulfilled, (state, action) => {
      state.token = action.payload.authToken;
      state.isLoggedin = !!action.payload.authToken;
      state.username = action.payload.user.name;
    });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
