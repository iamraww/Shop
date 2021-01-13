const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Product = require('./models/product');
const port = 8888;

app.use(express.static('public'))
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:abcd1234@cluster0.5saaw.mongodb.net/CrShop?retryWrites=true&w=majority', { useNewUrlParser: true });

// app.get('/', function (request, response) {
//     response.render('index.ejs', { title: 'Home page'});
// })
//
// app.get('/about-us', function (request, response) {
//     response.render('about-us.ejs', { title: 'About Us'});
// })
//
// app.get('/list-product', function (request, response) {
//     response.render('list-product.ejs', { title: 'List Product'});
// })
//
// app.get('/product-ruby', function (request, response) {
//     response.render('products/ruby.ejs', { title: 'Ruby'});
// })
//
// app.get('/product1', function (request, response) {
//     response.render('product1.ejs', { title: 'Pearl Libel'});
// })
//
// app.get('/quick-view', function (request, response) {
//     response.render('quick-view/quick-view.ejs', { title: 'Quick View'});
// })
//
// app.get('/lotus-ruby-ring', function (request, response) {
//     response.render('quick-view/lotus-ruby-ring.ejs', { title: 'Lotus Ruby Ring'});
// })
//
// app.get('/sun-eyes', function (request, response) {
//     response.render('quick-view/sun-eyes.ejs', { title: 'Suns eyes'});
// })
//
// app.get('/love-fox', function (request, response) {
//     response.render('quick-view/love-fox.ejs', { title: 'Love Fox'});
// })
//
// app.get('/turtle-ruby', function (request, response) {
//     response.render('quick-view/turtle-ruby.ejs', { title: 'Turtle Ruby'});
// })
//
// app.get('/flower-sliver', function (request, response) {
//     response.render('quick-view/flower-sliver.ejs', { title: 'Flower Sliver'});
// })
//
// app.get('/lotus-ruby-bracelet', function (request, response) {
//     response.render('quick-view/lotus-ruby-bracelet.ejs', { title: 'Lotus Ruby Bracelet'});
// })
//
// app.get('/contact-us', function (request, response) {
//     response.render('contact-us.ejs', { title: 'Contact Us'});
// })
//
// app.get('/new-arrival', function (request, response) {
//     response.render('new-arrival.ejs', { title: 'New Arrival'});
// })
//
//
// app.get('/sale-products', function (request, response) {
//     response.render('sale-products.ejs', { title: 'New Sale'});
// })

const adminIndex = require('./routes/admin/admin');
const indexPage = require('./routes/client/index');
const Products = require('./routes/client/products');
app.use(indexPage);
app.use(Products);
app.use(adminIndex);



app.get('/create-product', function (req, res) {
    res.render('create-product.ejs');
})

app.post('/save-product', function (req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const thumbnail = req.body.thumbnail;
    const product = new Product({
        name: name,
        price: price,
        thumbnail: thumbnail
    });
    product.save();
    res.send('Save success!');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})