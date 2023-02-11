import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  name: string;
  email: string;
}

const initialState: AuthState = {
  isAuth: false,
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      state.isAuth = true;
    },
    logout(state) {
      state.name = "";
      state.email = "";
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
