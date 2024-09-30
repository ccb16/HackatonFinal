const express = require('express');
const { getProducts, filterProducts, addProduct } = require('../controllers/homeController'); // Verifica que 'addProduct' esté aquí

const router = express.Router();

router.get('/products', getProducts);

router.get('/products/filter', filterProducts);


router.post('/products', addProduct); 

module.exports = router;
