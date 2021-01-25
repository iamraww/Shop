const express = require('express');
const route = express.Router();

route.get('/product/new-arrival', function (request, response) {
    response.render('client/products/new-arrival.ejs', {title: 'New Arrival'});
})


route.get('/sale-products', function (request, response) {
    response.render('client/products/sale-products.ejs', {title: 'New Sale'});
})
module.exports = route;