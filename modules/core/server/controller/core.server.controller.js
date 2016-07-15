/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';

var mockService = require('../utils/core.server.mock');

module.exports.getContacts = function (req, res){
    res.status (200);
    res.json(mockService.getContacts);
    
};

module.exports.createContact = function (req,res){
    var contact = req.body;
    if (!contact) {
        res.status (400);
        res.end("Error, undefined in posting the contact");
    }
     contact = mockService.saveContact (contact);
    if (contact){
        res.status (200);
        res.json(contact);
    } else {
        res.status (400);
        res.end ("Error: couldn't save contact")
    }
}

module.exports.deleteContact = function (req, res) {
    var delcontact = req.body;
    if (!delcontact) {
        res.status (400);
        res.end ("Error, no defined contact to be removed");
    }

    else {
        res.status (200);
        delcontact = mockService.deleteContact(delcontact);
        //console.log('hello1');
        res.end();
    }
}

module.exports.getContactId = function (req, res) {
    var novaContact = req.body;
    if (!novaContact){
        res.status (400);
        res.end ("Error, no contact to be updated");
    }
    else {
        res.status (200);
        novaContact = mockService.getContactId (novaContact);
        res.end ();

    }
}