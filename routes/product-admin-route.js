const express = require('express');
const route = express.Router();
const productController = require('../controllers/admin/admin-controller');


// index admin
route.get('/admin', productController.adminIndex);
route.get('/admin/login', productController.loginAdmin);
// all
route.get('/admin/all-products', productController.allProduct);
route.get('/admin/all-post', productController.allPost);
route.get('/admin/all-admin', productController.allAdmin);
route.get('/admin/all-categories', productController.allCategories);

// trả về form để nhập thông tin
route.get('/admin/add-product', productController.create);
route.get('/admin/add-post', productController.createPost);
route.get('/admin/add-admin', productController.createAdmin);
route.get('/admin/add-category', productController.createCategories);
// nhận thông tin từ form, save vào database.
route.post('/admin/add-product', productController.save);
route.post('/admin/add-post', productController.savePost);
route.post('/admin/add-admin', productController.saveAdmin);
route.post('/admin/add-category', productController.saveCategories);
route.post('/admin/login', productController.loginAdminPost);

route.get('/admin/edit-product/:id', productController.edit);
route.post('/admin/edit-product/:id', productController.update);

route.post('/admin/delete/:id', productController.delete);
route.post('/admin/delete-post/:id', productController.deletePost);
route.post('/admin/delete-admin/:id', productController.deleteAdmin);
route.post('/admin/delete-category/:id', productController.deleteCategories);

module.exports = route;
