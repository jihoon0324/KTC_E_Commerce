//product :  get 상품상세 / 전체상품, post 상품등록(사진), udpate 상품, 수량, 사진 변경, delete 상품삭제 -2명(시안, 은지)

const Product = require("../models/ProductModels.js");
const Category = require("../models/CategoryModels.js");

// GET all products
exports.getAllProducts = async (req, res) => {
  let products;

  // Find all products from DB
  try {
    products = await Product.find();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

  // Return projects as an array to frontend
  return res.status(200).json(products);
};

// GET product
exports.getProduct = async (req, res) => {
  let product;

  // Find products from DB
  try {
    product = await Product.findById(req.params.id);
  } catch (error) {
    console.error(error);
  }

  // Return project if successful
  return res.status(200).json(product);
};

// GET products by category
exports.getProductsByCategory = async (req, res) => {
  let products;

  // Find all products by category
  try {
    products = await Product.find({ category: req.params.categoryId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

  // Return projects as an array to frontend
  return res.status(200).json(products);
};

// POST new product
exports.addProduct = async (req, res) => {
  const { productName, price, photoUrls, content, totalQty, categoryId } = req.body;
  let product;

  try {
    const category = await Category.findById(categoryId);

    // Create new product object with data
    product = new Product({
      productName: productName,
      price: price,
      photoUrls: photoUrls,
      content: content,
      totalQty: totalQty,
      category: category,
    });

    // Save the product to DB
    await product.save();
  } catch (error) {
    return console.log(error);
  }

  // Return project if successful
  return res.status(201).json(product);
};

//Delete product
//DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  try {
    await product.remove();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    return console.log(error);
  }
};

//Update product
//PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  const { productName, price, photoUrl, content, totalQty, category } =
    req.body;

  const product = await Product.findById(req.params.id);
  try {
    product.productName = productName;
    product.price = price;
    product.photoUrl = photoUrl;
    product.content = content;
    product.totalQty = totalQty;
    product.category = category;

    const updateProduct = await product.save();
    res.json(updateProduct);
  } catch (error) {
    res.satatus(404);
    return console.log(error);
  }
};
