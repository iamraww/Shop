var mongoose = require('mongoose'); // nhúng thư viện mongoose


var Schema = new mongoose.Schema({
    name: {
        type: String
    },
    thumbnail: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String
        // new, sale, default
    },
    tag: {
        type: String
    }
});
var ObjectModel = mongoose.model('products', Schema);
module.exports = ObjectModel;
