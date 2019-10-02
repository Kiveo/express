const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

// implicit /admin/ from app.js
router.get('/add-product', adminController.getAddProduct);

// implicit /admin/ from app.js
router.get('/products');

router.post('/add-product', adminController.postAddProduct);

module.exports = router;