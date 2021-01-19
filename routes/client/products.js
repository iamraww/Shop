const express = require('express');
const route = express.Router();

route.get('/product/list-product', function (request, response) {
    response.render('client/products/list-product.ejs', {title: 'List Product'});
})

route.get('/product/ruby', function (request, response) {
    response.render('client/products/ruby.ejs', {title: 'Ruby'});
})

route.get('/product/product1', function (request, response) {
    response.render('client/products/product1.ejs', {title: 'Pearl Libel'});
})

route.get('/product/new-arrival', function (request, response) {
    response.render('client/products/new-arrival.ejs', {title: 'New Arrival'});
})


route.get('/product/sale-products', function (request, response) {
    response.render('client/products/sale-overview.ejs', {title: 'New Sale'});
})
module.exports = route;