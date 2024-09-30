const express = require('express');
const { processPayment } = require('../controllers/paymentsController');

const router = express.Router();

router.post('/payments', processPayment);

module.exports = router;
