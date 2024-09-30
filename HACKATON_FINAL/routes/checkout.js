const express = require('express');
const { createPurchase } = require('../controllers/checkoutController');

const router = express.Router();

router.post('/checkout', createPurchase);

module.exports = router;
