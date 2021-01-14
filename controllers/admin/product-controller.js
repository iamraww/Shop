const Product = require('../../models/product');

exports.getList = function (req, resp) {
    Product.find(function (err, data) {
        resp.render('admin/product/index', {data: data});
    });
}

exports.getDetail = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/product/detail', {obj: obj});
        }
    });
}

exports.create = function (req, resp) {
    resp.render('admin/product/create');
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

    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/table');
        }
    });
}

exports.edit = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/product/edit', {obj: obj});
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
                resp.redirect('/admin/products');
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
