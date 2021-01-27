const express = require('express');
const route = express.Router();
const productController = require('../controllers/admin/product-controller');


// index admin
route.get('/admin', productController.adminIndex);
route.get('/admin/login', productController.adminLogin);
// all products
route.get('/admin/all-products', productController.allProduct);

// trả về form để nhập thông tin
route.get('/admin/add-product', productController.create);
// nhận thông tin từ form, save vào database.
route.post('/admin/add-product', productController.save);

route.get('/admin/edit-product/:id', productController.edit);

route.post('/admin/edit-product/:id', productController.update);

route.post('/admin/delete/:id', productController.delete);

module.exports = route;
