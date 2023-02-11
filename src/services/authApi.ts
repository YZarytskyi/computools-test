import axios from "axios";

export const getUserAvatar = async () => {
  try {
    const { data } = await axios.get(`https://reqres.in/api/users/1`);
    return data.data.avatar
  } catch (error) {
    console.log(error);
  }
};
