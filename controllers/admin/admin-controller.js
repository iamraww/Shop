const Product = require('../../modules/product');
const article = require('../../modules/article');
const adminAccount = require('../../modules/account-admin');
const categories = require('../../modules/category');
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

 //categories
exports.createCategories = function (req, resp) {
    resp.render('admin/add-category');
}
exports.saveCategories = function (req, resp) {
    var obj = new categories(req.body);
    console.log(req.body);
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/all-categories');
        }
    });
}
exports.allCategories = async function (req, resp) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const listProduct = await categories.find().paginate(parseInt(page), parseInt(limit));
    const totalProduct = await categories.count();
    const totalPage = Math.ceil(totalProduct / limit);
    resp.render('admin/all-categories', {data: listProduct, page: page, limit: limit, totalPage: totalPage});
}
// exports.editCategories = function (req, resp) {
//     Product.findById(req.params.id, function (err, obj) {
//         if (err) {
//             return res.status(500).send(err);
//         } else {
//             resp.render('admin/edit-category', {obj: obj});
//         }
//     });
// }
exports.deleteCategories = function (req, resp) {
    categories.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.status(200).send();
            }
        });
}
//product
exports.allProduct = async function (req, resp) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const categories = await categories.find();
    const listProduct = await Product.find().paginate(parseInt(page), parseInt(limit));
    const totalProduct = await Product.count();
    const totalPage = Math.ceil(totalProduct / limit);
    resp.render('admin/all-products', {data: listProduct,categories: categories, page: page, limit: limit, totalPage: totalPage , allProducts: allProducts});
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
    categories.find({status: 1}, function (err, data){
        resp.render('admin/add-product', {data: data});
    })
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

//loginadmin
exports.loginAdmin = function (req, resp) {
    resp.render('admin/login-admin');
}
exports.loginAdminPost = async function (req, resp) {
    const existAccount = await adminAccount.findOne({username: req.body.username});
    if (existAccount == null){
        resp.status(401).send('Account do not exist')
        // return resp.render('client/login-client', { message: 'Account do not exist ', account: account});
    }
    if (md(req.body.password + existAccount.salt) == existAccount.password){
        return resp.redirect('/admin');
    }else {
        resp.status(401).send('Wrong password')
        // return resp.render('client/login-client', { message: 'Wrong password ', account: account});
    }
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
