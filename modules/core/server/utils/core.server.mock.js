/**
 * Created by dongmei on 7/10/2016.
 */
'use strict';

var Chance = require ('chance'),
          _=require ('lodash');
// create 10 contacts with mock server
var generateMockContacts = function (){
    var chance = new Chance ();
    var contacts = [];
    for (var i=0; i<10; i++){
        var contact = {};
        var name = chance.name ().split (' ');
        contact.firstName = name[0];
        contact.lastName = name [1];
        contact.zip = chance.zip();
        contact.email = chance.email();
        contact.address = chance.address();
        contact.id = chance.guid();

        contacts.push(contact);

    }
    return contacts;
}

var contacts = generateMockContacts();


// use postman to add a contact
module.exports.saveContact = function (contact){
    var chance = new Chance ();
    var cloneContact = _.clone(contact);
    cloneContact.id = chance.guid();
    contacts.push(cloneContact);
    return cloneContact;
}
module.exports.getContacts = contacts;

// delete a contact with Postman

module.exports.deleteContact = function (contact){

    for (var i=0; i<contacts.length; i++){

        if (JSON.stringify(contacts[i]) == JSON.stringify(contact)) {
            contacts.splice(i,1);
            i--;
        }
        //else {
            //console.log ("error, please confirm the contact are in the origin list")
        //}
    }
}

module.exports.getContactId = function (contact) {

    for (var i=0; i<contacts.length; i++){
        if (JSON.stringify(contacts[i]) == JSON.stringify(contact)){
            console.log ("The contact Id is "+ contacts[i].Id);
        } else {
            //console.log( "Error, there is no such a contact in the List");
        }
    }
}





module.exports.getContacts = contacts;


