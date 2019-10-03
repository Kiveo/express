// import class/model
const Product = require('../models/product');

// all admin controller paths are prepended with /admin from app.js
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: 'add-product',
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(productList => {
    res.render('admin/products', {
      path: 'products',
      pageTitle: 'Admin Products',
      products: productList,
    });
  });
}