import { getPhotos } from './../../services/photosApi';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Photo } from '../../types/types';

export const fetchPhotos = createAsyncThunk(
  "photos/fetch",
  async (page: number) => {
    return (await getPhotos(page)) as Array<Photo>;
  }
);