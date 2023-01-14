import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlice";
// import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    // middleware: [thunk, logger],
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  },
});
