var mongoose = require('mongoose'); // nhúng thư viện mongoose


var Schema = new mongoose.Schema({
    title: {
        type: String
    },
    detail: {
        type: String
    }

});
Schema.statics.random = function (cb) {
    this.count(function (err, count) {
        if (err) return cb(err);
        var rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(cb);
    }.bind(this));
};
var ObjectModel = mongoose.model('article', Schema);
module.exports = ObjectModel;
