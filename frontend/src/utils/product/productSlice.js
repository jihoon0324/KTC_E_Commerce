import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList : [],
  detailList : [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getDetailProduct(state, action) {
      state.detailList = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
