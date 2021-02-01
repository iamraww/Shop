var mongoose = require('mongoose'); // nhúng thư viện mongoose
const mongoosePaginate = require('mongoose-pagination')

var Schema = new mongoose.Schema({
    category: {
        type: String
    },
    descriptions: {
        type: String
    },
    status: {
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
var ObjectModel = mongoose.model('categories', Schema);
module.exports = ObjectModel;
