const express = require("express");

const productRouter = express.Router();

const {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.get("/category/:categoryId", getProductsByCategory);
productRouter.post("/add", addProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
