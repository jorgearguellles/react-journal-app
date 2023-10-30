import { createSlice } from "@reduxjs/toolkit";

// export const authSlice = createSlice({ name ,initialState, reducers });
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "checking", "not-authenticated", "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      // state.status = "authenticated";
    },
    logout: (state, action) => {
      // state.status = "not-authenticated";
    },
    checkingCredentials: (state, action) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
