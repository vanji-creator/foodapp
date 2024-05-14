import { configureStore, createReducer } from "@reduxjs/toolkit";
import cart from "./cartSlice";
const Store = configureStore({
  reducer: {
    cart: cart,
  },
});

export default Store;
