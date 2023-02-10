import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import photosReducer from "./photos/photosSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
