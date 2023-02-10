import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean;
  name: string,
  email: string,
}

const initialState: AuthState = {
  isAuth: false,
  name: '',
  email: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload
    },
  },
})

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer