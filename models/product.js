
const Cart = require('./cart');
const db= require('../util/database')
module.exports = class Product {
  constructor(id, title, imageurl,price) {
    this.id = id;
    this.title = title;
    this.imageurl = imageurl;
    this.price = price;
  }

  save() {
   return db.execute('INSERT INTO products (title,imageurl,price) VALUES (?,?,?)',[this.title,this.imageurl,this.price])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {
    
  }
}
