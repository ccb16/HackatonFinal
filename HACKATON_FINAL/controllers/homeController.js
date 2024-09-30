const Product = require('../models/Product'); 
const getProducts = async (req, res) => {

};


const filterProducts = async (req, res) => {
 
};


const addProduct = async (req, res) => {
  const { name, category, price, description } = req.body;

  const newProduct = new Product({
    name,
    category,
    price,
    description,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, filterProducts, addProduct }; 
