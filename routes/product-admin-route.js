const express = require('express');
const route = express.Router();
const productController = require('../controllers/admin/product-controller');


// index admin
route.get('/', productController.getList);
// all products
route.get('/all-products', productController.allProduct);

// trả về form để nhập thông tin
route.get('/add-product', productController.create);
// nhận thông tin từ form, save vào database.
route.post('/add-product', productController.save);

route.get('/edit-product/:id', productController.edit);
route.get('/edit-detail/:id', productController.editDetail);

route.post('/edit-product/:id', productController.update);
route.post('/edit-detail/:id', productController.updateDetail);

route.post('/delete/:id', productController.delete);

module.exports = route;
