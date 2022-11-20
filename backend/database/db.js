const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(process.env.MONGODB_URL, connectionParams)
    .then(() => console.log("Connected To MongoDB ......"))
    .catch((err) => console.log(err));
};
