const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const productList = adminData.products || [];
  // render('viewName', object.values available to view)
  res.render('shop', {
    pageTitle: 'Shop',
    products: productList,
    hasProducts: productList.length > 0,
    path: '/',
  });
});

module.exports = router;