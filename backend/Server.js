const express = require("express");
const cors = require("cors");

// !Router
const UserRouter = require("./routers/UserRouters");
const productRouter = require("./routers/ProductRouters");
const OrderRouter = require("./routers/OrderRouters");

//!  for local port connect
require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

//!  mongodb connection
const connection = require("./database/db");
connection();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/order", OrderRouter);
app.use("/user", UserRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log(`Listening on : ${PORT}`));
