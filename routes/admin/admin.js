const express = require('express');
const route = express.Router();

route.get('/admin/index', function (request, response) {
    response.render('admin/dashboard.ejs', { title: 'New Arrival'});
})


module.exports = route;