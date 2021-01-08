const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = 8888;

app.use(express.static('public'))
app.set('views', 'views');
app.set('view engine', 'ejs');



app.get('/', function (request, response) {
    response.render('index.ejs', { title: 'Home page'});
})

app.get('/about-us', function (request, response) {
    response.render('about-us.ejs', { title: 'About Us'});
})

app.get('/list-product', function (request, response) {
    response.render('list-product.ejs', { title: 'List Product'});
})
app.get('/product1', function (request, response) {
    response.render('product1.ejs', { title: 'Pearl Libel'});
})
app.get('/quick-view', function (request, response) {
    response.render('quick-view.ejs', { title: 'Quick View'});
})

app.get('/contact-us', function (request, response) {
    response.render('contact-us.ejs', { title: 'Contact Us'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})