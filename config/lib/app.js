/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';



var express = require ('./express'),
    config = require('../config'),
    path = require('path');


module.exports.loadRoutes = function (app){
    var coreRoute = require (path.join(process.cwd(),'modules/core/server/routes/core_server.routes.js'));
    coreRoute (app);

}


module.exports.start = function (){
    var app = express.init ();

    //routes registration
    this.loadRoutes(app);

    app.listen (config.app.port, function (){
        console.log ('Application is running on port 8090');
    });
}

