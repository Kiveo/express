// import class/model
const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll(productList => {
    res.render('shop/index', {
      path: '/',
      pageTitle: 'Shop',
      products: productList,
    });
  });
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(productList => {
    res.render('shop/product-list', {
      path: '/products',
      pageTitle: 'All Products',
      products: productList,
    });
  });
}

exports.getCart = ((req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
});

exports.getCheckout = ((req, res, next) => {
  res.render('shop/checkout', {
    path: 'checkout',
    pageTitle: 'Checkout',
  });
});

// TODO add controller/routing for detailed view: product/1