const fs = require('fs'); // access file system
const path = require('path'); // use paths across diff os

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("::file error::", err)
      });
    });
  }

  // can be called on class directly (static)
  static fetchAll(cb) {
    getProductsFile(cb);
  }

}