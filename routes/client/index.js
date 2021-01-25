const express = require('express');
const route = express.Router();
// const clientPage = require('../controllers/admin/product-controller');
//
// route.get('/', clientPage.indexProduct);

route.get('/about-us', function (request, response) {
    response.render('client/about-us.ejs', {title: 'About Us'});
})




route.get('/contact-us', function (request, response) {
    response.render('client/contact-us.ejs', {title: 'Contact Us'});
})

module.exports = route;