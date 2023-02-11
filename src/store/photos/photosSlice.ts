import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../../types/types";
import { fetchMorePhotos, fetchPhotos, } from "./photosThunks";

interface AuthState {
  photos: Photo[];
  isLoading: boolean;
}

const initialState: AuthState = {
  photos: [],
  isLoading: false,
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
    builder
      .addCase(fetchMorePhotos.fulfilled, (state, action) => {
        state.photos = [...state.photos, ...action.payload];
      })
    builder
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photos = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { removePhotos } = photosSlice.actions;

export default photosSlice.reducer;
