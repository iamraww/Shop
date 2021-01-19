const Product = require('../../models/product');

exports.indexProduct = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('index', {data: data});
    });
}

exports.getList = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/overview', {data: data});
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
    // const name = req.body.name;
    // const price = req.body.price;
    // const thumbnail = req.body.thumbnail;
    // const tag = req.body.tag;
    // const status = req.body.status;
    // const product = new Product({
    //     name: name,
    //     price: price,
    //     thumbnail: thumbnail,
    //     tag: tag,
    //     status: status
    //
    // });
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

exports.editDetail = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/edit-detail-product', {obj: obj});
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
