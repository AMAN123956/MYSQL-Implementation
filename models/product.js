
const Cart = require('./cart');
// const db = require('../util/database')
// Old Sql Method

// module.exports = class Product {
//   constructor(id, title, imageurl,price) {
//     this.id = id;
//     this.title = title;
//     this.imageurl = imageurl;
//     this.price = price;
//   }

//   save() {
//    return db.execute('INSERT INTO products (title,imageurl,price) VALUES (?,?,?)',[this.title,this.imageurl,this.price])
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products')
//   }

//   static findById(id) {
//           return db.execute('SELECT * FROM products WHERE products.id=?',[id])
//   }
// }



// ===================================================================
// Sequelize
const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
  },
  title: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})


module.exports = Product