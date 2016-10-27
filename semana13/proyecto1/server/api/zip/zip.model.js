'use stric';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ZipSchema = new Schema({
    city: String,
    state: String
});

module.exports = mongoose.model('Zip',ZipSchema);