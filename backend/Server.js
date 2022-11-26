const express = require("express");
const cors = require("cors");
//import routes
// import ProductRouters from "./routers/ProductRouters";

// !Router
const UserRouter = require("./routers/UserRouters");
const productRoute = require("./routers/ProductRouters");

//!  for local port connect
require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

//import routes
const productRoute = require("./routers/ProductRouters");

//!  mongodb connection
const connection = require("./database/db");
connection();

app.use(express.json());
// 이거 뭐임?  밑에거 두개
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/user", UserRouter);

// app.use("/api/products", ProductRouters);
// app.listen(PORT, (res, req) => {
//   console.log("connect server");
// });

app.listen(PORT, () => console.log(`Listening on : ${PORT}`));
