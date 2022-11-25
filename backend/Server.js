const express = require("express");

//import routes
// import ProductRouters from "./routers/ProductRouters";

require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

// const connection = require("./database/db");
// connection();

app.use(express.json());

// app.use("/api/products", ProductRouters);
app.listen(PORT, (res, req) => {
  console.log("connect server");
});
