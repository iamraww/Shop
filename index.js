const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Product = require('./models/product');
const port = 8888;

app.use(express.static('public'))
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:duc123@cluster0.5saaw.mongodb.net/CristalShop?retryWrites=true&w=majority\n', {useNewUrlParser: true});

// const adminIndex = require('./routes/admin/admin');
const indexPage = require('./routes/client/index');
const Products = require('./routes/client/products');
app.use(indexPage);
app.use(Products);
// app.use(adminIndex);
const productAdminRoute = require('./routes/product-admin-route');
app.use('/admin/', productAdminRoute);



app.get('/', function (request, response) {
    Product.find(function (err, data) {
        response.render('index.ejs', {data: data});
    });
})

// app.post('/save-product', function (req, res) {
//     const name = req.body.name;
//     const price = req.body.price;
//     const thumbnail = req.body.thumbnail;
//     const product = new Product({
//         name: name,
//         price: price,
//         thumbnail: thumbnail
//     });
//     product.save();
//     res.send('Save success!');
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})