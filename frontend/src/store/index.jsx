import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import PostSlice from "./slices/PostSlice";
import FollowerSlice from "./slices/FollowerSlice";
import ConnectSlice from "./slices/ConnectSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    post: PostSlice,
    follower: FollowerSlice,
    connection: ConnectSlice,
  },
});

export default store;
