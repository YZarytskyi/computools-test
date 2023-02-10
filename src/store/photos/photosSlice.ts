import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../../types/types";
import { fetchPhotos } from "./photosThunks";

interface AuthState {
  photos: Photo[];
}

const initialState: AuthState = {
  photos: [],
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    removePhotos: (state) => {
      state.photos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = [...state.photos, ...action.payload];
    })
  },
});

export const {removePhotos} = photosSlice.actions;

export default photosSlice.reducer;
