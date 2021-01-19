var mongoose = require('mongoose'); // nhúng thư viện mongoose


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
    tag: {
        type: String
    },
    detail: {
        type: String
    }
});
var ObjectModel = mongoose.model('products', Schema);
module.exports = ObjectModel;
