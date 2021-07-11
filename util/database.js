// code is using mysql without any framework
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password:'nodeapp@123'
// })


// module.exports = pool.promise();


// ==================================================
// Sequelize Code
const mysql = require('mysql2')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'nodeapp@123',
{
    dialect: 'mysql',
    host: 'localhost'
})


module.exports = sequelize

