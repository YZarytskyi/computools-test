import { createSlice } from "@reduxjs/toolkit";
import { fetchUserAvatar } from "./authThunks";

interface AuthState {
  isAuth: boolean;
  name: string;
  email: string;
  avatar: string;
}

const initialState: AuthState = {
  isAuth: false,
  name: "",
  email: "",
  avatar: "",
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
  extraReducers(builder) {
    builder.addCase(fetchUserAvatar.fulfilled, (state, action) => {
      state.avatar = action.payload;
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
