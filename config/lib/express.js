/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';
var express = require ('express');//3rd party library

module.exports.init = function (){
    var app = express ();
    
    return app;
}