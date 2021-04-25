const aftc = require("./debug");
const cls = aftc.cls;
const log = aftc.log;

const fs = require('fs');
const path = require('path');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function getJSOCommentFromString(input) {

    // JSODOC = {
    //     "method": "arrayClear",
    //     "params": [
    //         {
    //             "type": "array",
    //             "label": "arr",
    //             "required": false
    //         }
    //     ],
    //     "returns": [
    //     ]
    //     "example": [
    //         "line",
    //         "by line"
    //     ]
    // } JSODOC

    let lines = input.split("\n");
    let JSODocOpen = false;
    let comments = [];

    // process lines array
    let comment = [];

    let cleanAndAddComment = function (rawComment) {
        let cleanComment = rawComment.replace(/\/\//g, "").trim(); // remove all //
        // cleanComment = rawComment.replace(/\\/g, "/"); // replaces all \\ to / (g flag)
        cleanComment = cleanComment.replace(/(\t)/gm, "").trim(); // remove all \t
        comment.push(cleanComment);
        // log(cleanComment);
    }

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // clean array entries (we wont be re-assembling the file anyway)
        line = line.replace(/(\r\n|\n|\t|\r)/gm, "").trim(); // remove \t \n \r
        // log(line.length + "    " + line);

        // Only check lines that are > 10 and < 15 chars long for JSON Open and Close tags
        // Open: JSODOC {
        // Close: } JSODOC

        if (!JSODocOpen) {
            // Look for JSODOC start
            if (line.length > 10 && line.length < 15) {
                let foundOepener = line.toLowerCase().indexOf("jsodoc = {");
                if (foundOepener != -1) {
                    // log(line);
                    JSODocOpen = true;
                    // line = line.replace("jsodoc = {", "{");
                    cleanAndAddComment("{");
                }
            }

        } else {
            // Look for JSODOC end or add comment
            let foundCloser = line.toLowerCase().indexOf("} jsodoc");
            if (foundCloser != -1) {
                // log(line);
                JSODocOpen = false;
                // line = line.replace("} jsodoc", "}");
                cleanAndAddComment("}");
                comments.push(comment.join(""));
                comment = [];
            } else {
                cleanAndAddComment(line);
            }

        }


    }


    return comments;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function generateJSODocs(comments) {
    let readme = "";

    comments.forEach(comment => {
        let j = JSON.parse(comment)
        readme += jsoDocGetTitle(j)
        readme += jsoDocGetInfo(j)
        readme += jsoDocGetParams(j)
        readme += jsoDocGetExample(j)
        readme += "<hr><br><br>"
    })

    return readme;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - -

let jsoDocGetExample = (data) => {
    let str = "";

    if (data.hasOwnProperty("example")) {
        str += "```\n";
        data.example.forEach(line => {
            str += line + "\n";
        });
        str += "```\n";
    }

    return str;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - -

let jsoDocGetInfo = (data) => {
    let str = "";

    if (data.hasOwnProperty("info")) {
        str += "<b>Information:</b><br>\n" + data.info + "<br>\n";
    }

    return str;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - -

let jsoDocGetParams = (data) => {
    let str = "";

    if (data.hasOwnProperty("params")) {
        str += "#### <b>Parameters:</b>\n"

        data.params.forEach(param => {
            str += "- "
            if (param.hasOwnProperty("name")) {
                str += "<b>Name:</b> " + param["name"] + "<br>\n"
            }
            if (param.hasOwnProperty("type")) {
                str += "<b>Type:</b> " + param["type"] + "<br>\n"
            }
            if (param.hasOwnProperty("required")) {
                str += "<b>Required:</b> " + param["required"] + "<br>\n"
            }
            if (param.hasOwnProperty("default")) {
                str += "<b>Default:</b> " + param["default"] + "<br>\n"
            }
            if (param.hasOwnProperty("info")) {
                str += "<b>Info:</b> " + param["info"]
            }
            str += "\n<br><br>\n";

        })
        return str
    } else {
        return "";
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - -

let jsoDocGetTitle = (data) => {
    let title = "";

    let isClass = data.hasOwnProperty("class");
    let isMethod = data.hasOwnProperty("method");

    if (!isClass && !isMethod) {
        title = "### JSODOC ERROR Parsing: " + comment
    } else if (isClass) {
        title = "### <b>" + data.class + jsoDocGetTitleParams(data) + "</b>\n";
    } else if (isMethod) {
        title = "### <b>" + data.method + jsoDocGetTitleParams(data) + "</b>\n";
    }

    return title;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - -


let jsoDocGetTitleParams = (data) => {
    let str = "";

    if (data.hasOwnProperty("params")) {
        str += "(";
        data.params.forEach(param => {
            let keys = Object.keys(param);
            // log(param["name"])
            str += param["name"] + ",";
        })
        str += ")";

        // Trim last ,
        // log(str[str.length-2]);
        if (str[str.length - 2] == ",") {
            str = str.replace(",)", ")");
        }

        return str
    } else {
        return "()";
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








module.exports = {
    getJSOCommentFromString,
    generateJSODocs
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -