const mongoose = require("mongoose");
// category:  블라우스, 드레스, 바지 
const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
