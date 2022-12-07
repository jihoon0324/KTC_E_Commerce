import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../utils/product/productSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
