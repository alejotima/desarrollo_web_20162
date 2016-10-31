/**
 *   GET     /zips       -> index
 *   POST    /zips       -> create
 *   PUT     /zips/:id   -> update
 *   DELETE  /zips/:id   -< destroy
 */
'use strict';
var Zip = require('./zip.model');
exports.index = function (req, res) {
    console.log('entro al index');
    Zip.find(function (err, zips) {
        console.log(zips);
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(zips);
    }).limit(5);
};