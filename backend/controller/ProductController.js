//product :  get 상품상세 / 전체상품, post 상품등록(사진), udpate 상품, 수량, 사진 변경, delete 상품삭제 -2명(시안, 은지)
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//Delete product
//delete /api/products/:id
const deleteProduct = {};

//Update product
//put /api/products/:id
const updateProduct = {};

export { deleteProduct, updateProduct };
