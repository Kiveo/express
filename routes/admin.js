const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

// implicit /admin/ from app.js
router.get('/add-product', productsController.getAddProduct);

// implicit /admin/ from app.js
router.get('/products');

router.post('/add-product', productsController.postAddProduct);

module.exports = router;