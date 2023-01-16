import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../slices/posts";
import { userReducer } from "../slices/users";

export const store = configureStore({ 
    reducer: { 
      users: userReducer,
      posts: postReducer
    } 
}); 