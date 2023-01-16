import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
      createUser(state, action) {
        console.log(state, action)
      },
      updateUser(state, action) {
        console.log(state, action)

      },
      deleteUser(state, action) {
        console.log(state, action)
      },
    },
})
const { actions, reducer } = usersSlice;
export const { createUser, updateUser, deleteUser } = actions;
export const userReducer = reducer