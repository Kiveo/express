const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // add "this" instance to products array
    products.push(this);
  }

  // can be called on class directly (static)
  static fetchAll() {
    return products;
  }

}