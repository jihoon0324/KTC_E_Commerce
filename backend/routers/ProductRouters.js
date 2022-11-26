const express = require("express");

const productRouter = express.Router();

const {
  getAllProducts,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");

productRouter.get("/", getAllProducts);
productRouter.get("/:categoryId", getProductsByCategory);
productRouter.post("/add", addProduct);
productRouter.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = productRouter;
