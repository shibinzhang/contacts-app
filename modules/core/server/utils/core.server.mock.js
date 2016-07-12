/**
 * Created by dongmei on 7/10/2016.
 */

var Chance = require ('chance');

var generateMockContacts = function (){
    var Chance = require ('chance');
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
        
        contacts.push(contact);
        
    }
    return contacts;
}

module.exports.getContacts = generateMockContacts();