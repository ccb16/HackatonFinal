const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/products/search', async (req, res) => {
    const { category, price } = req.query;
    const query = {};
    
    if (category) query.category = category;
    if (price) query.price = { $lte: price };

    try {
        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
