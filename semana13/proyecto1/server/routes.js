'use strict'
var path = require('path');
module.exports = function(app) {
    app.use('/api/zips', require('./api/zip'));
    app.route('/*').get(function(req, res){
        res.sendFile(path.normalize(__dirname + '/../client/index.html'))
    });
};