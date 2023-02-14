import axios from 'axios';
import { Photo } from '../types/types';

export const getPhotos = async (page: number) => {
  try {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?limit=7&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotoDetails = async (id: string) => {
  const { data } = await axios.get<Photo>(`https://picsum.photos/id/${id}/info`);
  return data;
};
