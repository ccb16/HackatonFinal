const express = require('express');
const Purchase = require('../models/Purchase');
const router = express.Router();


router.post('/checkout', async (req, res) => {
    const { userId, products, totalAmount } = req.body;
    const purchase = new Purchase({ userId, products, totalAmount });

    try {
        await purchase.save();
        res.status(201).json(purchase);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
