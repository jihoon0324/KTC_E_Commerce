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
  // status:{
  //   type: Number,
  //  required:true,
  // },
  user_Id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [
    {
      name: {type: String, required: true},
      qty: {type: Number, required: true},
      image: {type:String, required:true},
      price: {type:Number, required:true},
      product:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      },
    },
  ],
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
