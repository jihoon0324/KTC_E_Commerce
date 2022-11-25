const mongoose = require("mongoose");
//  product: category_id, 상품이름, 가격, 사진 주소 array(?), 상세설명, 총수량, 주문 수량
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  totalQty: {
    type: Number,
    required: true,
  },
  orderQty: {
    type: Number,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
