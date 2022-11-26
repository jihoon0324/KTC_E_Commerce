const express = require("express");

const orderRouter = express.Router();
const  {
    postOrder,
    getOrder

} = require ('../controller/OrderController.js');


orderRouter.post('/odering', postOrder)

module.exports = orderRouter;