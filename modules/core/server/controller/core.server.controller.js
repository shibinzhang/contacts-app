/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';

var mockService = require('../utils/core.server.mock');

module.exports.getContacts = function (req, res){
    res.status (200);
    res.json(mockService.getContacts);
    
};