const Product = require('../../modules/product');
const AccountCllient = require('../../modules/accounts-client');
require('mongoose-pagination');
const md = require('md5');

exports.rubyProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('client/ruby', {data: data});
    });
}
exports.aquamarineProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('client/aquamarine', {data: data});
    });
}
exports.newArrival = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('client/new-arrival', {data: data});
    });
}
exports.saleProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('client/sale-product', {data: data});
    });
}

exports.quickView = async function (req, resp) {
    const obj = await Product.findById(req.params.id);
    const lienQuan = await Product.find();
    resp.render('client/product', {obj: obj, other: lienQuan});
}
//account client
exports.registerClient = function (req, resp) {
        resp.render('client/register-client');
    };

exports.registerClientSave = async function (req, resp) {
    const account = new AccountCllient(req.body);
    account.salt = Math.random().toString(36).substring(7);
    account.password = md(account.password + account.salt);
    account.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin');
        }
    });
}
exports.loginClient = async function (req, resp) {
    const obj = await Product.findById(req.params.id);
    const lienQuan = await Product.find();
    resp.render('client/login-client', {data: obj});
}

// exports.rubyProduct = async function (req, resp) {
//     const product = await Product.findById(req.params.id);
//     const lienQuan = await Product.find();
//     resp.render('client/ruby', {product: product, lienQuan: lienQuan});
// }