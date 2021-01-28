const Product = require('../../modules/product');
const article = require('../../modules/article');
const adminAccount = require('../../modules/account-admin');
require('mongoose-pagination');
const md = require('md5');

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

//product
exports.allProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/all-products', {data: data});
    });
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

exports.create = function (req, resp) {
    resp.render('admin/add-product');
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
//admin
exports.createAdmin = function (req, resp) {
    resp.render('admin/add-admin');
}
exports.saveAdmin = function (req, resp) {
    const accountAdmin = new adminAccount(req.body);
    accountAdmin.salt = Math.random().toString(36).substring(7);
    accountAdmin.password = md(accountAdmin.password + accountAdmin.salt);
    accountAdmin.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/all-admin');
        }
    });
}
exports.allAdmin = function (req, resp) {
    adminAccount.find(function (err, data) {
        resp.render('admin/all-admin', {data: data});
    });
}
exports.deleteAdmin = function (req, resp) {
    adminAccount.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.status(200).send();
            }
        });
}
//post
exports.createPost = function (req, resp) {
    resp.render('admin/add-post');
}
exports.savePost = function (req, resp) {
    var obj = new article(req.body);
    console.log(req.body);
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/all-post');
        }
    });
}
exports.allPost = function (req, resp) {
    article.find(function (err, data) {
        resp.render('admin/all-post', {data: data});
    });
}
exports.editPost = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/edit-post', {obj: obj});
        }
    });
}
exports.deletePost = function (req, resp) {
    article.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.status(200).send();
            }
        });
}
