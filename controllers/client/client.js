const Product = require('../../modules/product');
const Category = require('../../modules/category');
const AccountCllient = require('../../modules/accounts-client');
require('mongoose-pagination');
const md = require('md5');

exports.categoryProduct = async function (req, resp) {
    const listCategory = await Category.find();
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const listProduct = await Product.find({categoryId: req.params.categoryId}).paginate(parseInt(page), parseInt(limit));
    const totalProduct = await Product.count({categoryId: req.params.categoryId});
    const totalPage = Math.ceil(totalProduct / limit);
    resp.render('client/ring', {data: listProduct, listCategory: listCategory, page: page, limit: limit, totalPage: totalPage});
}
// exports.ringProduct = async function (req, resp) {
//     const page = req.query.page || 1;
//     const limit = req.query.limit || 8;
//     const listProduct = await Product.find({tag: 'Ring'}).paginate(parseInt(page), parseInt(limit));
//     const totalProduct = await Product.count({tag: 'Ring'});
//     const totalPage = Math.ceil(totalProduct / limit);
//     resp.render('client/ring', {data: listProduct, page: page, limit: limit, totalPage: totalPage});
// }
exports.aquamarineProduct =  async function (req, resp) {
    const listCategory = await Category.find();
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const listProduct = await Product.find({categoryId: req.params.categoryId}).paginate(parseInt(page), parseInt(limit));
    const totalProduct = await Product.count({categoryId: req.params.categoryId});
    const totalPage = Math.ceil(totalProduct / limit);
    resp.render('client/aquamarine', {data: listProduct, listCategory: listCategory, page: page, limit: limit, totalPage: totalPage});
}
exports.newArrival =  async function (req, resp) {
    const page = req.query.page || 1;
    const listCategory = await Category.find();
    const limit = req.query.limit || 8;
    const listProduct = await Product.find().paginate(parseInt(page), parseInt(limit));
    const totalProduct = await Product.count();
    const table = await Product.find();
    const totalPage = Math.ceil(totalProduct / limit);
    resp.render('client/new-arrival', {data: listProduct, listCategory: listCategory, page: page, limit: limit, totalPage: totalPage, obj: table});

}
exports.saleProduct =  async function (req, resp) {
    const page = req.query.page || 1;
    const listCategory = await Category.find();
    const limit = req.query.limit || 8;
    const listProduct = await Product.find().paginate(parseInt(page), parseInt(limit));
    const totalProduct = await Product.count();
    const table = await Product.find();
    const totalPage = Math.ceil(totalProduct / limit);
    resp.render('client/sale-product', {data: listProduct, listCategory: listCategory, page: page, limit: limit, totalPage: totalPage, obj: table});

}

exports.quickView = async function (req, resp) {
    const listCategory = await Category.find();
    const obj = await Product.findById(req.params.id);
    const lienQuan = await Product.find();
    resp.render('client/product', {obj: obj, other: lienQuan, listCategory: listCategory});
}

//account client
exports.registerClient = function (req, resp) {
    resp.render('client/register-client', { message: '', account: { username: '', password: '', email: ''}});
};

exports.registerClientSave = async function (req, resp) {
    const account = new AccountCllient(req.body);
    const existingAccount = await AccountCllient.findOne({username: account.username});
    if(existingAccount != null){
        return resp.render('client/register-client', { message: 'Account is taken, please choose another account!', account: account});
    }
    account.salt = Math.random().toString(36).substring(7);
    account.password = md(account.password + account.salt);
    account.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/');
        }
    });
}
//login
exports.loginClient = function (req, resp) {
    resp.render('client/login-client');
}
exports.loginClientPost = async function (req, resp) {
    const existAccount = await AccountCllient.findOne({username: req.body.username});
    if (existAccount == null){
        resp.status(401).send('Account do not exist')
        // return resp.render('client/login-client', { message: 'Account do not exist ', account: account});
    }
    if (md(req.body.password + existAccount.salt) == existAccount.password){
        return resp.redirect('/');
    }else {
        resp.status(401).send('Wrong password')
        // return resp.render('client/login-client', { message: 'Wrong password ', account: account});
    }
}

// exports.rubyProduct = async function (req, resp) {
//     const product = await Product.findById(req.params.id);
//     const lienQuan = await Product.find();
//     resp.render('client/ruby', {product: product, lienQuan: lienQuan});
// }