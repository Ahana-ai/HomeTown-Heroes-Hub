import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

const initialState = {
  user: {},
  createUserStatus: "",
  createUserError: "",
  getUserStatus: "",
  getUserError: "",
};

export const addUser = createAsyncThunk(
  "register",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const res = await axios.post(`${baseURL}/register`, data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);

export const loginUser = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const res = await axios.post(`${baseURL}/login`, data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [addUser.pending]: (state, action) => {
      return {
        ...state,
        addUserStatus: "pending",
        createUserError: "",
        getUserStatus: "",
        getUserError: "",
      };
    },
    [addUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload,
        addUserStatus: "success",
        createUserError: "",
        getUserStatus: "",
        getUserError: "",
      };
    },
    [addUser.rejected]: (state, action) => {
      return {
        ...state,
        addUserStatus: "rejected",
        createUserError: action.payload,
        getUserStatus: "",
        getUserError: "",
      };
    },
    [loginUser.pending]: (state, action) => {
      return {
        ...state,
        addUserStatus: "pending",
        createUserError: "",
        getUserStatus: "",
        getUserError: "",
      };
    },
    [loginUser.fulfilled]: (state, action) => {
      return {
        ...state,
        addUserStatus: "success",
        createUserError: "",
        getUserStatus: "",
        getUserError: "",
      };
    },
    [loginUser.rejected]: (state, action) => {
      return {
        ...state,
        addUserStatus: "rejected",
        createUserError: action.payload,
        getUserStatus: "",
        getUserError: "",
      };
    },
  },
});

export default userSlice.reducer;
