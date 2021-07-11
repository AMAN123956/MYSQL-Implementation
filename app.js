const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database')
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// Old method
// db.execute('SELECT * FROM products')
//     .then(([rows,fieldData]) => console.log(rows[0]))
//     .catch(err => console.log(err))

// ========================================================
// Sequelize Method to connect to database
const sequelize = require('./util/database')
sequelize.sync().
    then(result => {
        console.log(result)
      
app.listen(3000,console.log('server running'));

    })
    .catch(err => console.log(err))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
