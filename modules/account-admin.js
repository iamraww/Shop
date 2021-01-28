var mongoose = require('mongoose'); // nhúng thư viện mongoose


var Schema = new mongoose.Schema({
    fullName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    salt: {
        type: String
    },
    permission: {
        type: String
    },
    createAt: {
        type: String
    }
});

Schema.statics.random = function(cb) {
    this.count(function(err, count) {
        if (err) return cb(err);
        var rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(cb);
    }.bind(this));
};
var ObjectModel = mongoose.model('accounts-admin', Schema);
module.exports = ObjectModel;
