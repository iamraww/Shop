const express = require('express');
const route = express.Router();
const clientIndex = require('../controllers/client/client');

route.get('/ruby', clientIndex.rubyProduct);
route.get('/login', clientIndex.loginClient);

route.get('/product/:id', clientIndex.quickView);
module.exports = route;