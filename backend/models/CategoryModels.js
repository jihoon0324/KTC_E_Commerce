const mongoose = require("mongoose");
// category:  블라우스, 드레스, 바지 
const CategorySchema = new mongoose.Schema({
  blouse: {
    type: String,
    required: true,
  },
  dress: {
    type: String,
    required: true,
  },
  pants: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
