import { getPhotoDetails, getPhotos } from './../../services/photosApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Photo } from '../../types/types';

export const fetchMorePhotos = createAsyncThunk(
  'photos/fetchMore',
  async (page: number) => {
    return (await getPhotos(page)) as Array<Photo>;
  }
);

export const fetchPhotos = createAsyncThunk('photos/fetch', async () => {
  return (await getPhotos(1)) as Array<Photo>;
});

