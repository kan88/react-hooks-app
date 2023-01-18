import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "asyncUsersSlice/getUsers",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    return res.data;
  }
);

export const getUser = createAsyncThunk(
  "asyncUsersSlice/getUser",
  async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
  }
);

// Обрабатываем операции в редукторах
const asyncUsersSlice = createSlice({
  name: "users",
  initialState: {
    status: false,
    users: [],
    user: [],
    failedMessage: "",
  },
  reducers: {
    showUsers(state, action) {
      console.log(state, action)
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      state.status = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user.push(action.payload);
      state.status = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.jobsLoading = false;
      state.failedMessage = action.payload
    },
  },
});

const { actions, reducer } = asyncUsersSlice;
export const { showUsers } = actions;
export const asyncUsersReducer = reducer
