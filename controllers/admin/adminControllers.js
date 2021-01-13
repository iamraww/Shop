
const Product = require('../../models/product');

exports.getList = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/dashboard.ejs' , {data: data});
    });
}

exports.getDetail = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/detail.ejs', { obj: obj});
        }
    });
}

exports.create = function (req, resp) {
    resp.render('admin/add-product.ejs');
}
