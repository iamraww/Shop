const Product = require('../../modules/product');

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

exports.loginClient = async function (req, resp) {
    const obj = await Product.findById(req.params.id);
    const lienQuan = await Product.find();
    resp.render('client/login-client', {data: obj});
}
exports.registerClient = async function (req, resp) {
    const obj = await Product.findById(req.params.id);
    const lienQuan = await Product.find();
    resp.render('client/register-client', {data: obj});
}
// exports.rubyProduct = async function (req, resp) {
//     const product = await Product.findById(req.params.id);
//     const lienQuan = await Product.find();
//     resp.render('client/ruby', {product: product, lienQuan: lienQuan});
// }