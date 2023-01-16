import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, body: 'Приготовить завтрак', title: 'Задание на утро'},
    {id: 2, body: 'Сходить в магазин', title: 'Задание на вечер'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      createPost(state) {
        console.log(state.length)
      },
      updatePost(state, action) {
        state.push(action.payload)
      },
      deletePost(state, action) {
        console.log(state, action)
      },
    },
})
const { actions, reducer } = postsSlice;
export const { createPost, updatePost, deletePost } = actions;
export const postReducer = reducer