const express = require('express');
const route = express.Router();
const clientIndex = require('../controllers/client/client');

route.get('/ruby', clientIndex.rubyProduct);
route.get('/aquamarine', clientIndex.aquamarineProduct);
route.get('/new-arrival', clientIndex.newArrival);
route.get('/login', clientIndex.loginClient);
route.get('/register', clientIndex.registerClient);
route.get('/sale-products', clientIndex.saleProduct);

route.get('/product/:id', clientIndex.quickView);
module.exports = route;