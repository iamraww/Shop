const express = require('express');
const route = express.Router();
const productController = require('../controllers/admin/product-controller');


// index admin
route.get('/admin', productController.adminIndex);
route.get('/admin/login', productController.adminLogin);
// all
route.get('/admin/all-products', productController.allProduct);
route.get('/admin/all-post', productController.allPost);
route.get('/admin/all-admin', productController.allAdmin);

// trả về form để nhập thông tin
route.get('/admin/add-product', productController.create);
route.get('/admin/add-post', productController.createPost);
route.get('/admin/add-admin', productController.createAdmin);
// nhận thông tin từ form, save vào database.
route.post('/admin/add-product', productController.save);
route.post('/admin/add-post', productController.savePost);
route.post('/admin/add-admin', productController.saveAdmin);

route.get('/admin/edit-product/:id', productController.edit);

route.post('/admin/edit-product/:id', productController.update);

route.post('/admin/delete/:id', productController.delete);
route.post('/admin/delete-post/:id', productController.deletePost);
route.post('/admin/delete-admin/:id', productController.deleteAdmin);

module.exports = route;
