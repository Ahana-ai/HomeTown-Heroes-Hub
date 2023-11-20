import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

const initialState = {
  follower: {
    userId: "",
    followingId: "",
  },
  createFollowerStatus: "",
  createFollowerError: "",
  getFollowerStatus: "",
  getFollowerError: "",
  deleteFollowerStatus: "",
  deleteFollowerError: "",
};

export const addFollower = createAsyncThunk(
  "add-follower",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const res = await axios.Follower(`${baseURL}/add-follower`, data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);

export const getFollowers = createAsyncThunk(
  "followers",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/followers-${id}`);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const getFollowing = createAsyncThunk(
  "following",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/following-${id}`);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const deleteFollower = createAsyncThunk(
  "delete-follower",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${baseURL}/delete-follower/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

const FollowerSlice = createSlice({
  name: "Follower",
  initialState,
  reducers: {},
  extraReducers: {
    // Create-Follower ---->
    [addFollower.pending]: (state, action) => {
      return {
        ...state,
        createFollowerStatus: "pending",
        createFollowerError: "",
        getFollowerStatus: "",
        getFollowerError: "",
        deleteFollowerStatus: "",
        deleteFollowerError: "",
      };
    },
    [addFollower.fulfilled]: (state, action) => {
      return {
        ...state,
        Follower: action.payload,
        createFollowerStatus: "success",
        createFollowerError: "",
        getFollowerStatus: "",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "",
        deleteFollowerError: "",
      };
    },
    [addFollower.rejected]: (state, action) => {
      return {
        ...state,
        createFollowerStatus: "rejected",
        createFollowerError: action.payload,
        getFollowerStatus: "",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "",
        deleteFollowerError: "",
      };
    },
    // Fetch Follower details
    [getFollowers.fulfilled]: (state, action) => {
      return {
        ...state,
        Follower: action.payload,
        createFollowerStatus: "",
        createFollowerError: "",
        getFollowerStatus: "success",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "",
        deleteFollowerError: "",
      };
    },
    [getFollowers.pending]: (state, action) => {
      return {
        ...state,
        createFollowerStatus: "",
        createFollowerError: "",
        getFollowerStatus: "pending",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "",
        deleteFollowerError: "",
      };
    },
    [getFollowers.rejected]: (state, action) => {
      return {
        ...state,
        createFollowerStatus: "",
        createFollowerError: "",
        getFollowerStatus: "rejected",
        getFollowerError: action.payload,
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "",
        deleteFollowerError: "",
      };
    },
    // Delete Follower
    [deleteFollower.fulfilled]: (state, action) => {
      return {
        ...state,
        Follower: {},
        createFollowerStatus: "",
        createFollowerError: "",
        getFollowerStatus: "",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "success",
        deleteFollowerError: "",
      };
    },
    [deleteFollower.pending]: (state, action) => {
      return {
        ...state,
        createFollowerStatus: "",
        createFollowerError: "",
        getFollowerStatus: "",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "pending",
        deleteFollowerError: "",
      };
    },
    [deleteFollower.rejected]: (state, action) => {
      return {
        ...state,
        createFollowerStatus: "",
        createFollowerError: "",
        getFollowerStatus: "",
        getFollowerError: "",
        editFollowerStatus: "",
        editFollowerError: "",
        deleteFollowerStatus: "rejected",
        deleteFollowerError: action.payload,
      };
    },
  },
});

export default FollowerSlice.reducer;
