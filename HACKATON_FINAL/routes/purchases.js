const express = require('express');
const { getPurchases } = require('../controllers/purchasesController');

const router = express.Router();

router.get('/purchases/:userId', getPurchases);

module.exports = router;
