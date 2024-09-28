const express = require('express');
const Purchase = require('../models/Purchase');
const router = express.Router();

router.get('/purchases/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const purchases = await Purchase.find({ userId });
        res.json(purchases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
