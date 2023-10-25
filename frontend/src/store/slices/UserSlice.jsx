import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

const initialState = {
  user: {
    // name: "",
    // email: "",
    // age: 0,
    // location: "",
    // acheivement: "",
    // talents: "",
    // bio: "",
    // profile_image: "",
    // social_media_links: "",
    // profile_completion_score: 0,
  },
  token: "",
  createUserStatus: "",
  createUserError: "",
  loginUserStatus: "",
  loginUserError: "",
  logoutUserStatus: "",
  logoutUserError: "",
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
      console.log(res.data.isUserExists);
      return res.data.isUserExists;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logout",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/logout`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "details",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/details/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const editUser = createAsyncThunk(
  "edit",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${baseURL}/edit/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const deleteUser = createAsyncThunk(
  "delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${baseURL}/delete/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // Register ---->
    [addUser.pending]: (state, action) => {
      return {
        ...state,
        addUserStatus: "pending",
        createUserError: "",
        loginUserStatus: "",
        loginUserError: "",
        logoutUserStatus: "",
        logoutUserError: "",
      };
    },
    [addUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload,
        addUserStatus: "success",
        createUserError: "",
        loginUserStatus: "",
        loginUserError: "",
        logoutUserStatus: "",
        logoutUserError: "",
      };
    },
    [addUser.rejected]: (state, action) => {
      return {
        ...state,
        addUserStatus: "rejected",
        createUserError: action.payload,
        loginUserStatus: "",
        loginUserError: "",
        logoutUserStatus: "",
        logoutUserError: "",
      };
    },
    // Login ------>
    [loginUser.pending]: (state, action) => {
      return {
        ...state,
        addUserStatus: "",
        createUserError: "",
        loginUserStatus: "pending",
        loginUserError: "",
        logoutUserStatus: "",
        logoutUserError: "",
      };
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        addUserStatus: "",
        createUserError: "",
        loginUserStatus: "success",
        loginUserError: "",
        logoutUserStatus: "",
        logoutUserError: "",
      };
    },
    [loginUser.rejected]: (state, action) => {
      return {
        ...state,
        addUserStatus: "",
        createUserError: "",
        loginUserStatus: "rejected",
        loginUserError: action.payload,
        logoutUserStatus: "",
        logoutUserError: "",
      };
    },
    // Logout ----->
    [logoutUser.pending]: (state, action) => {
      return {
        ...state,
        addUserStatus: "",
        createUserError: "",
        loginUserStatus: "",
        loginUserError: "",
        logoutUserStatus: "pending",
        logoutUserError: "",
      };
    },
    [logoutUser.fulfilled]: (state, action) => {
      console.log(action);
      return {
        ...state,
        user: {},
        token: "",
        addUserStatus: "",
        createUserError: "",
        loginUserStatus: "",
        loginUserError: "",
        logoutUserStatus: "success",
        logoutUserError: "",
      };
    },
    [logoutUser.rejected]: (state, action) => {
      return {
        ...state,
        addUserStatus: "",
        createUserError: "",
        loginUserStatus: "",
        loginUserError: "",
        logoutUserStatus: "rejected",
        logoutUserError: action.payload,
      };
    },
  },
});

export default userSlice.reducer;
