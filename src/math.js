const log = require('./debug').log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "isEven",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "The number you want to check is even."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is even or not.",
//     "example": [
//         "let answer = isEven(input);"
//     ]
// } JSODOC
exports.isEven = function(n) {
    return n % 2 === 0;
}


// JSODOC = {
//     "method": "isOdd",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "The number you want to check is odd."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is odd or not.",
//     "example": [
//         "let answer = isOdd(input);"
//     ]
// } JSODOC
exports.isOdd = function(n) {
    return Math.abs(n % 2) === 1;
}


// JSODOC = {
//     "method": "roundTo",
//     "params": [
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "The number you want to round."
//         },
//         {
//             "name": "dec",
//             "type": "Number",
//             "required": true,
//             "info": "The number of decimal places you wish to round to."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Rounds a number to a specific amount of decimal places.",
//     "example": [
//         "let v = roundTo(3.142,1);"
//     ]
// } JSODOC
exports.roundTo = function(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}
