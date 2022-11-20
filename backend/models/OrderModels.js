const mongoose = require("mongoose");
//  order: user(object), product object array(?), 주소, 날짜, 총액
const OrderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  user_Id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productArray: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
