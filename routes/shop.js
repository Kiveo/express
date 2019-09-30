const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/products');

router.get('/', adminControllers.getProducts);

module.exports = router;