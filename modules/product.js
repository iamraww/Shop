var mongoose = require('mongoose'); // nhúng thư viện mongoose
const mongoosePaginate = require('mongoose-pagination')

var Schema = new mongoose.Schema({
    name: {
        type: String
    },
    thumbnail: {
        type: String
    },
    thumbnail1: {
        type: String
    },
    thumbnail2: {
        type: String
    },
    thumbnail3: {
        type: String
    },
    thumbnail4: {
        type: String
    },
    price: {
        type: Number
    },
    saleprice: {
        type: Number
    },
    stone: {
        type: String
        // ruby, ....
    },
    status: {
        type: String
    },
    tag: {
        type: String
    },
    categoryId: {
        type: mongoose.Types.ObjectId
    },
    detail: {
        type: String
    }
});

Schema.statics.paginate = mongoosePaginate;
Schema.statics.random = function(cb) {
    this.count(function(err, count) {
        if (err) return cb(err);
        var rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(cb);
    }.bind(this));
};
var ObjectModel = mongoose.model('products', Schema);
module.exports = ObjectModel;
