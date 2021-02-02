const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Product = require('./modules/product');
const Category = require('./modules/category');
const port = 8888;

app.use(express.static('public'))
app.set('views', 'views');
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:duc123@cluster0.5saaw.mongodb.net/CristalShop?retryWrites=true&w=majority\n', {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: false}));
// body-parser

const productAdminRoute = require('./routes/product-admin-route');
const clienRoute = require('./routes/clientRoutes');


app.use(productAdminRoute);
app.use(clienRoute);


app.get('/', async function (request, response) {
    const listProduct = await Product.find();
    const listCategory = await Category.find();
    response.render('client/index.ejs', {data: listProduct, listCategory: listCategory});
})

app.get('/test', function (request, response) {
    Product.find(function (err, data) {
        response.render('client/test.ejs', {data: data});
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})