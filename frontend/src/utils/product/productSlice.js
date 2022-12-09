import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList : [],
  product : null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload;
    },
    getDetailProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
