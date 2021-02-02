const express = require('express');
const route = express.Router();
const clientIndex = require('../controllers/client/client');

route.get('/category/:categoryId', clientIndex.categoryProduct);
route.get('/new-arrival', clientIndex.newArrival);
route.get('/about-us', clientIndex.aboutUs);
route.get('/contact-us', clientIndex.contactUs);
route.get('/login', clientIndex.loginClient);
route.post('/login', clientIndex.loginClientPost);

route.get('/register', clientIndex.registerClient);
route.post('/register', clientIndex.registerClientSave);

route.get('/sale-products', clientIndex.saleProduct);
route.get('/product/:id', clientIndex.quickView);
module.exports = route;