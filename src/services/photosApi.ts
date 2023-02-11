import axios from "axios";

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
