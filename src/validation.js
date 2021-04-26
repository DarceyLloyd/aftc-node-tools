const log = require('./debug').log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// JSODOC = {
//     "method": "isEmail",
//     "params": [
//         {
//             "name": "email",
//             "type": "String",
//             "required": true,
//             "info": "Email to validate."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the supplied email is valid or not.",
//     "example": [
//         "let isValidEmail = isEmail('darcey.lloyd@gmail.com');"
//     ]
// } JSODOC

const isEmail = function(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




module.exports = {
    isEmail
}