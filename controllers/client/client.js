const Product = require('../../modules/product');

exports.rubyProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('client/ruby', {data: data});
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
// exports.rubyProduct = async function (req, resp) {
//     const product = await Product.findById(req.params.id);
//     const lienQuan = await Product.find();
//     resp.render('client/ruby', {product: product, lienQuan: lienQuan});
// }