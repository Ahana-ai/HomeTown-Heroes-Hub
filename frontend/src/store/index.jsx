import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import PostSlice from "./slices/PostSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    post: PostSlice,
  },
});

export default store;
