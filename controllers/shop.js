// import class/model
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(productList => {
    res.render('shop/product-list', {
      pageTitle: 'Shop',
      products: productList,
      hasProducts: productList.length > 0,
      path: '/',
    });
  });
}

