import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../slices/posts";
import { userReducer } from "../slices/users";
import { asyncUsersReducer } from "../slices/asyncUsers";

export const store = configureStore({ 
    reducer: { 
      users: userReducer,
      posts: postReducer,
      asyncusers: asyncUsersReducer      
    } 
}); 