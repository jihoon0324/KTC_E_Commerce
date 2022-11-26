//product :  get 상품상세 / 전체상품, post 상품등록(사진), udpate 상품, 수량, 사진 변경, delete 상품삭제 -2명(시안, 은지)

const Product = require("../models/productModel.js");

//Delete product
//DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  try {
    await product.remove();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    return console.log(error);
  }
};

//Update product
//put /api/products/:id
exports.updateProduct = async (req, res) => {};
