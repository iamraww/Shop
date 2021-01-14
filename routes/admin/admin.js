const express = require('express');
const route = express.Router();
const productController = require('../controllers/admin/products');


// route.get('/admin/index', function (request, response) {
//     response.render('admin/table.ejs', { title: 'Index'});
// })


route.get('/admin', productController.getList);
// trả về form để nhập thông tin
route.get('/admin/create', productController.create);
// nhận thông tin từ form, save vào database.
route.post('/admin/create', productController.save);

route.get('/admin/detail/:id', productController.getDetail);

route.get('/admin/edit/:id', productController.edit);

route.post('/admin/edit/:id', productController.update);

route.post('/admin/delete/:id', productController.delete);

module.exports = route;