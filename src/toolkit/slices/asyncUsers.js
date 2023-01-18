import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "asyncusers/getUsers",
  //первый параметр то что мы передали, второй параметр опциональный, можно достать сразу метод dispatch, getState...
  async (_, {rejectWithValue }) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
      if (res.status !== 200) {
        throw new Error()
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteUser = createAsyncThunk(
  "asyncusers/deleteUser",
  //первый параметр то что мы передали, второй параметр опциональный, можно достать сразу метод dispatch, getState...
  async (id, {rejectWithValue, dispatch}) => {
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (res.status !== 200) {
        throw new Error('Can not delete')
      }
      dispatch(showOkConsole())
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const getUser = createAsyncThunk(
  "asyncusers/getUser",
  async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
  }
);

const setErrorStatus = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload
}

// Обрабатываем операции в редукторах
const asyncUsersSlice = createSlice({
  name: "asyncusers",
  initialState: {
    status: null,
    users: [],
    user: [],
    error: null,
    console: 'Console log'
  },
  reducers: {
    showUsers(state) {
      console.log(state)
    },
    showOkConsole() {
      console.log('delete')
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getUsers.pending, (state) => {
      // Add user to the state array
      state.status = 'loading';
      state.error = null
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.status = 'resolved';
      state.users.push(action.payload);
    })
    .addCase(getUsers.rejected, setErrorStatus)
    .addCase(deleteUser.rejected, setErrorStatus)
  },
});

const { actions, reducer } = asyncUsersSlice;
export const { showUsers, showOkConsole } = actions;
export const asyncUsersReducer = reducer