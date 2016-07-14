/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';
var express = require ('express');//3rd party library

module.exports.init = function (){
    var app = express ();
    //body parser middleware integration
    this.initBodyParser (app);
    
    return app;
};

var bodyParser = require ('body-parser');
module.exports.initBodyParser = function (app) {
// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

};
