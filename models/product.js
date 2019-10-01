const fs = require('fs'); // access file system
const path = require('path'); // use paths across diff os

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("::file error::", err)
      });
    });
  }

  // can be called on class directly (static)
  static fetchAll(cb) {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    })
  }

}