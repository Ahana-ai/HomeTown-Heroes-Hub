import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

const initialState = {
  connection: {
    userId: "",
    connectionId: "",
  },
  createConnectionStatus: "",
  createConnectionError: "",
  getConnectionStatus: "",
  getConnectionError: "",
  deleteConnectionStatus: "",
  deleteConnectionError: "",
};

export const addConnection = createAsyncThunk(
  "add-connection",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const res = await axios.Connection(`${baseURL}/add-connection`, data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);

export const getConnections = createAsyncThunk(
  "connections",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/connections-${id}`);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

export const deleteConnection = createAsyncThunk(
  "delete-connection",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${baseURL}/delete-connection/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response));
    }
  }
);

const ConnectionSlice = createSlice({
  name: "Connection",
  initialState,
  reducers: {},
  extraReducers: {
    // Create-Connection ---->
    [addConnection.pending]: (state, action) => {
      return {
        ...state,
        createConnectionStatus: "pending",
        createConnectionError: "",
        getConnectionStatus: "",
        getConnectionError: "",
        deleteConnectionStatus: "",
        deleteConnectionError: "",
      };
    },
    [addConnection.fulfilled]: (state, action) => {
      return {
        ...state,
        Connection: action.payload,
        createConnectionStatus: "success",
        createConnectionError: "",
        getConnectionStatus: "",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "",
        deleteConnectionError: "",
      };
    },
    [addConnection.rejected]: (state, action) => {
      return {
        ...state,
        createConnectionStatus: "rejected",
        createConnectionError: action.payload,
        getConnectionStatus: "",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "",
        deleteConnectionError: "",
      };
    },
    // Fetch Connection details
    [getConnections.fulfilled]: (state, action) => {
      return {
        ...state,
        Connection: action.payload,
        createConnectionStatus: "",
        createConnectionError: "",
        getConnectionStatus: "success",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "",
        deleteConnectionError: "",
      };
    },
    [getConnections.pending]: (state, action) => {
      return {
        ...state,
        createConnectionStatus: "",
        createConnectionError: "",
        getConnectionStatus: "pending",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "",
        deleteConnectionError: "",
      };
    },
    [getConnections.rejected]: (state, action) => {
      return {
        ...state,
        createConnectionStatus: "",
        createConnectionError: "",
        getConnectionStatus: "rejected",
        getConnectionError: action.payload,
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "",
        deleteConnectionError: "",
      };
    },
    // Delete Connection
    [deleteConnection.fulfilled]: (state, action) => {
      return {
        ...state,
        Connection: {},
        createConnectionStatus: "",
        createConnectionError: "",
        getConnectionStatus: "",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "success",
        deleteConnectionError: "",
      };
    },
    [deleteConnection.pending]: (state, action) => {
      return {
        ...state,
        createConnectionStatus: "",
        createConnectionError: "",
        getConnectionStatus: "",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "pending",
        deleteConnectionError: "",
      };
    },
    [deleteConnection.rejected]: (state, action) => {
      return {
        ...state,
        createConnectionStatus: "",
        createConnectionError: "",
        getConnectionStatus: "",
        getConnectionError: "",
        editConnectionStatus: "",
        editConnectionError: "",
        deleteConnectionStatus: "rejected",
        deleteConnectionError: action.payload,
      };
    },
  },
});

export default ConnectionSlice.reducer;
