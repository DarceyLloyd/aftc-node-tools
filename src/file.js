const fs = require('fs');
const path = require('path');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// JSODOC = {
//     "method": "concatFiles",
//     "params": [
//         {
//             "name": "filesArray",
//             "type": "Array",
//             "required": true,
//             "info": "Array of files."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Concatinates all files in the array into a string.",
//     "example": [
//         "let files = ['file1.js','file2.js']",
//         "concatFiles(arr)"
//     ]
// } JSODOC
function concatFiles(filesArray) {
    let out = "";


    filesArray.forEach(file => {
        var data = fs.readFileSync(file, 'utf8');
        // data = data.replace(/\s+/g, '\n');
        // data = data.replace(/(\r\n|\n\n|\r)/gm, "##");
        data = data.replace(/\r/g, ""); // replace all carrage returns
        // data = data.replace(/\n/g, ""); // replace all new lines
        data = data.replace(/\n\s*\n/g, '\n'); // Replace any double new lines with a single new line
        out += (data + "\n");
    })

    return out;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



module.exports = {
    concatFiles
}