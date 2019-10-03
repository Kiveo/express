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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(title, imageUrl, price, description);
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