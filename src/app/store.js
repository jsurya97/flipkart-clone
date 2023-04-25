import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import cartReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer, 
    cartData: cartReducer,
  },
});