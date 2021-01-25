const Product = require('../../modules/product');


// exports.quickView = function (req, resp) {
//     Product.findById(req.params.id, function (err, obj) {
//         if (err) {
//             return res.status(500).send(err);
//         } else {
//             resp.render('client/product', { obj: obj});
//         }
//     });
// }
// exports.quickView = async function (req, resp) {
//     const obj = await Product.findById(req.params.id);
//     const lienQuan = await Product.find();
//     resp.render('client/product', {obj: obj, other: lienQuan});
// }

exports.adminIndex = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/overview', {data: data});
    });
}
exports.adminLogin = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/login-admin', {data: data});
    });
}

exports.allProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/all-products', {data: data});
    });
}


exports.create = function (req, resp) {
    resp.render('admin/add-product');
}

exports.save = function (req, resp) {
    var obj = new Product(req.body);
    console.log(req.body);
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/all-products');
        }
    });
}

exports.edit = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/edit-product', {obj: obj});
        }
    });
}

exports.update = function (req, resp) {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: false},
        function (err, obj) {
            if (err) {
                return res.status(500).send(err);
            } else {
                resp.redirect('/admin/all-products');
            }
        });
}


exports.updateDetail = function (req, resp) {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: false},
        function (err, obj) {
            if (err) {
                return res.status(500).send(err);
            } else {
                resp.redirect('/admin/all-products');
            }
        });
}


exports.delete = function (req, resp) {
    Product.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.status(200).send();
            }
        });
}
