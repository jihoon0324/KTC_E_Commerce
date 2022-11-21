const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected To MongoDB ......"))
    .catch((err) => console.log(err));
};
