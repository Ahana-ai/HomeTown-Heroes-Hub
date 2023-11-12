import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

const initialState = {
  post: {
    images: [""],
    caption: "",
    likes: 0,
    comments: 0,
    shares: 0,
  },
  createPostStatus: "",
  createPostError: "",
  getPostStatus: "",
  getPostError: "",
  editPostStatus: "",
  editPostError: "",
  deletePostStatus: "",
  deletePostError: "",
};

export const addPost = createAsyncThunk(
  "create-post",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const res = await axios.post(`${baseURL}/create-post`, data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);

export const getPosts = createAsyncThunk(
  "details",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/post-${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const editPost = createAsyncThunk(
  "edit-post",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${baseURL}/edit-post/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const deletePost = createAsyncThunk(
  "delete-post",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${baseURL}/delete-post/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // Create-Post ---->
    [addPost.pending]: (state, action) => {
      return {
        ...state,
        createPostStatus: "pending",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    [addPost.fulfilled]: (state, action) => {
      return {
        ...state,
        post: action.payload,
        createPostStatus: "success",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    [addPost.rejected]: (state, action) => {
      return {
        ...state,
        createPostStatus: "rejected",
        createPostError: action.payload,
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    // Fetch Post details
    [getPosts.fulfilled]: (state, action) => {
      return {
        ...state,
        post: action.payload,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "success",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    [getPosts.pending]: (state, action) => {
      return {
        ...state,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "pending",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    [getPosts.rejected]: (state, action) => {
      return {
        ...state,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "rejected",
        getPostError: action.payload,
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    // Edit Post details
    [editPost.fulfilled]: (state, action) => {
      return {
        ...state,
        post: action.payload,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "success",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    [editPost.pending]: (state, action) => {
      return {
        ...state,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "pending",
        editPostError: "",
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    [editPost.rejected]: (state, action) => {
      return {
        ...state,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "rejected",
        editPostError: action.payload,
        deletePostStatus: "",
        deletePostError: "",
      };
    },
    // Fetch Post details
    [deletePost.fulfilled]: (state, action) => {
      return {
        ...state,
        post: {},
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "success",
        deletePostError: "",
      };
    },
    [deletePost.pending]: (state, action) => {
      return {
        ...state,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "pending",
        deletePostError: "",
      };
    },
    [deletePost.rejected]: (state, action) => {
      return {
        ...state,
        createPostStatus: "",
        createPostError: "",
        getPostStatus: "",
        getPostError: "",
        editPostStatus: "",
        editPostError: "",
        deletePostStatus: "rejected",
        deletePostError: action.payload,
      };
    },
  },
});

export default postSlice.reducer;
