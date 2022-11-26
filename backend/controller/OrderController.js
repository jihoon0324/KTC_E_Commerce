const Order = require("../models/OrderModels.js");
const User = require("../models/UserModels.js");
const Product = require("../models/ProductModels.js");

exports.postOrder = async (req, res) => {
  const { address, date, totalPrice, user_Id, orderItems } = req.body;

  try {
    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    } else {
      const order = new Order({
        address,
        date,
        totalPrice,
        user_Id,
        orderItems,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  } catch (error) {
    return console.log(error);
  }
};
const getOrder = {};
