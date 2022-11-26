const express = require("express");

const productRouter = express.Router();

const {
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");

productRouter.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = productRouter;
