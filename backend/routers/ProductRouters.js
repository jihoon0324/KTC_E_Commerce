import express from "express";

const router = express.Router();
import {
  updateProduct,
  deleteProduct,
} from "../controller/ProductController.js";

productRouter.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
