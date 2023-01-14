import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api";

const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
  try {
    const response = await api.getAllProducts();
    return response.data;
  } catch (err) {
    return err.data;
  }
});

const initialState = {
  productList: [],
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getAllProducts(state, action) {
    //   state.productList = action.payload;
    // },
    getDetailProduct(state, action) {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
