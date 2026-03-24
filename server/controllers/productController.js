const Product = require("../models/Product");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Public for now
const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      image,
      category,
      brand,
      countInStock,
    } = req.body;

    const product = new Product({
      name,
      price,
      description,
      image,
      category,
      brand,
      countInStock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data" });
  }
};

module.exports = {
  getProducts,
  createProduct,
};