const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentsController');


router.post('/', paymentController.processPayment);

module.exports = router;
