const express = require("express");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

//import routes
const productRoute = require("./routers/ProductRouters");

// const connection = require("./database/db");
// connection();

app.use(express.json());
app.use("/product", productRoute);

app.listen(PORT, (res, req) => {
  console.log("connect server");
});
