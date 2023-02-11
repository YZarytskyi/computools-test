import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAvatar } from "../../services/authApi";

export const fetchUserAvatar = createAsyncThunk("avatar/fetch", async () => {
  return (await getUserAvatar()) as string;
});
