const express = require('express');
const route = express.Router();


route.get('/sale-products', function (request, response) {
    response.render('client/products/sale-products.ejs', {title: 'New Sale'});
})
module.exports = route;