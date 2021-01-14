const express = require('express');
const route = express.Router();
// const clientPage = require('../controllers/admin/category-controller');


route.get('/', function (request, response) {
    response.render('index.ejs', {title: 'Home page'});
})

route.get('/about-us', function (request, response) {
    response.render('about-us.ejs', {title: 'About Us'});
})

route.get('/quick-view', function (request, response) {
    response.render('quick-view/quick-view.ejs', {title: 'Quick View'});
})

route.get('/lotus-ruby-ring', function (request, response) {
    response.render('quick-view/lotus-ruby-ring.ejs', {title: 'Lotus Ruby Ring'});
})

route.get('/sun-eyes', function (request, response) {
    response.render('quick-view/sun-eyes.ejs', {title: 'Suns eyes'});
})

route.get('/love-fox', function (request, response) {
    response.render('quick-view/love-fox.ejs', {title: 'Love Fox'});
})

route.get('/turtle-ruby', function (request, response) {
    response.render('quick-view/turtle-ruby.ejs', {title: 'Turtle Ruby'});
})

route.get('/flower-sliver', function (request, response) {
    response.render('quick-view/flower-sliver.ejs', {title: 'Flower Sliver'});
})

route.get('/lotus-ruby-bracelet', function (request, response) {
    response.render('quick-view/lotus-ruby-bracelet.ejs', {title: 'Lotus Ruby Bracelet'});
})

route.get('/contact-us', function (request, response) {
    response.render('contact-us.ejs', {title: 'Contact Us'});
})

module.exports = route;