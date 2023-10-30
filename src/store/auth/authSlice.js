import { createSlice } from "@reduxjs/toolkit";

// export const authSlice = createSlice({ name ,initialState, reducers });
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // "checking", "not-authenticated", "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      console.log({ state, action });
    },
    logout: (state, action) => {
      console.log({ state, action });
    },
    checkingCredentials: (state, action) => {
      console.log({ state, action });
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
