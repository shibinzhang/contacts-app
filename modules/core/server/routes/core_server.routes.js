/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';

module.exports = function (app) {

    var c =  require('../controller/core.server.controller.js');

    
    app 
        .route('/api/contact')
        .get(c.getContacts)
        .post(c.createContact)
        .delete(c.deleteContact)
        //.put (c.getContactId)
        .put(c.updateContact)


};