// const fs = require('fs-extra');
// const path = require('path');
// const util = require('util');

const fs = require('fs');
const path = require('path');

const aftc = require("./debug");
const cls = aftc.cls;
const log = aftc.log;



// exports.getFilesSync = function (dir) {

//     let a = 4;
//     let fileList = [];
//     let realDir = path.resolve(dir);

//     var dirRead = fs.readdirSync(dir);
//     for (var i in dirRead) {
//         log(i);
//     }


//     // fs.readdir(realDir, (err, entries) => {
//     //     if (err) throw err;

//     //     for (const entry of entries) {
//     //         // Do not process files that start with .
//     //         if (entry[0] != ".") {
//     //             let fullPath = path.join(realDir, entry); // Probably less load than resolve
//     //             // let fullPath = path.resolve(dir, entry);
//     //             log(fullPath);
//     //             fileList.push("abc");
//     //             // log(fileList.length);
//     //         }


//     //         // let fullPath = dir + "/" + entry;
//     //         // console.log("Checking: " + fullPath);
//     //         // log(fullPath);
//     //         // if (isDir(fullPath)) {
//     //         //     console.log(fullPath)
//     //         //     list(fullPath);
//     //         // } else {
//     //         //     log(fullPath);
//     //         // }
//     //     }
//     // });

//     return fileList;
// }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "isFile",
//     "params": [
//         {
//             "name": "path",
//             "type": "String",
//             "required": true,
//             "info": "Path you want to check is a file."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if path is a file.",
//     "example": [
//         "if ( isFile('./file1.js') ){",
//         "\tlog('Its a file!')",
//         "} else {",
//         "\tlog('That aint no file!')",
//         "}"
//     ]
// } JSODOC
function isFile(path) {
    var stats = fs.statSync(path);
    return stats.isFile();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "isDir",
//     "params": [
//         {
//             "name": "dir",
//             "type": "String",
//             "required": true,
//             "info": "Path you want to check is a directory."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if path is a directory.",
//     "example": [
//         "if ( isDir('./mydir') ){",
//         "\tlog('It exists!')",
//         "} else {",
//         "\tlog('Nooooo!')",
//         "}"
//     ]
// } JSODOC

function isDir(dir) {
    try {
        return fs.lstatSync(dir).isDirectory()
    } catch (e) {
        // Handle error
        // if (e.code == 'ENOENT') {
        //     //no such file or directory
        // } else {
            
        // }
        // console.log(e)
        return false
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// JSODOC = {
//     "method": "getFilesSync",
//     "params": [
//         {
//             "name": "dir",
//             "type": "Array",
//             "required": true,
//             "default": null,
//             "info": "Directory."
//         },
//         {
//             "name": "ext",
//             "type": "String",
//             "required": true,
//             "default": "*",
//             "info": "Array of files."
//         },
//         {
//             "name": "recurse",
//             "type": "Boolean",
//             "required": false,
//             "default": false,
//             "info": "Array of files."
//         },
//         {
//             "name": "includeHidden",
//             "type": "Boolean",
//             "required": false,
//             "default": false,
//             "info": "Array of files."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Gets an array of files in a directory. Hidden files start with a . (linux style, not windows)",
//     "example": [
//         "let files = getFilesSync('./src', '.js', true);"
//     ]
// } JSODOC
function getFilesSync(dir, ext = "*", recurse = false, includeHidden = false) {

    ext = ext.toLowerCase();

    let files = [];
    let rootDir = path.resolve(dir);
    var dirRead = fs.readdirSync(rootDir);

    for (let i in dirRead) {
        let fileName = dirRead[i];
        // let fullPath = path.resolve(rootDir + '/' + fileName); // not the cross platform way
        let fullPath = path.join(rootDir, fileName);
        // let relPath = dir + "/" + fileName;

        // NOTE this is not the cross platform way
        // // relPath = relPath.replace("//","/"); // replaces single
        // relPath = relPath.replace(/\/\//g, "/"); // replaces all // to / (g flag)
        // relPath = relPath.replace(/\\/g, "/"); // replaces all \\ to / (g flag)
        // log(fileName);


        let isHidden = false;
        if (fileName[0] == ".") {
            isHidden = true;
        }

        let processEntry = true;
        if (isHidden && !includeHidden) {
            processEntry = false;
        }


        if (processEntry) {
            if (isDir(fullPath)) {
                if (recurse == true) {
                    let recursionRead = getFilesSync(fullPath, ext, recurse);
                    files = files.concat(recursionRead);
                }
            } else {
                let fileExtension = path.extname(fileName)
                if (ext === "*" || ext === "*.*" || ext === fileExtension) {
                    files.push(fullPath);
                }
            }
        }


    }
    return files;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// async function getFiles(dir) {
//     const subdirs = await readdir(dir);
//     const files = await Promise.all(subdirs.map(async (subdir) => {
//         const res = resolve(dir, subdir);
//         return (await stat(res)).isDirectory() ? getFiles(res) : res;
//     }));
//     return files.reduce((a, f) => a.concat(f), []);
// }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// JSODOC = {
//     "method": "writeFile",
//     "params": [
//         {
//             "name": "filePath",
//             "type": "String",
//             "required": true,
//             "info": "Path to file you want to write to (will create it if it doesnt exist)."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Writes data to a file.",
//     "example": [
//         "let data = 'hello world';",
//         "writeFile('./test.txt',data);"
//     ]
// } JSODOC
function writeFile(filePath, data) {
    fs.writeFile(filePath, data, function (err) {
        if (err) {
            throw err;
        } else {
            return true
        }
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// JSODOC = {
//     "method": "promiseWriteFile",
//     "params": [
//         {
//             "name": "filePath",
//             "type": "String",
//             "required": true,
//             "info": "Path to file you want to write to (will create it if it doesnt exist)."
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Writes data to a file but returns a promise.",
//     "example": [
//     "let data = 'hello world';",
//     "writeFile('./test.txt', data)",
//     "   .then(() => {",
//     "       log('success')",
//     "   });",
//     "   .catch(() => {",
//     "       log('failure')",
//     "   });"
//     ]
// } JSODOC
function promiseWriteFile(dir, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dir, data, function (err) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(true)
            }
        });
    })
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "readFileToString",
//     "params": [
//         {
//             "name": "filePath",
//             "type": "String",
//             "required": true,
//             "info": "Path to file you want read."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a file as a string.",
//     "example": [
//         "let data = readFileToString('./test.txt');"
//     ]
// } JSODOC
function readFileToString(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -









module.exports = {
    isFile,
    isDir,
    getFilesSync,
    writeFile,
    promiseWriteFile,
    readFileToString,
}


// const isFile = function(pathItem) {
//     // Works with fs but not fs-extra
//     // try {
//     //     if (fs.existsSync(path)) {
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // } catch (err) {
//     //     return false;
//     // }

//     fs.pathExists(pathItem, (err, exists) => {
//         if (err){
//             console.error("aftc.node-utils: isFile(pathItem:"+pathItem+"): Error")
//             console.error(err);
//         } else {
//             return exists;
//         }
//     })
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// function isDir(dir) {
//     const fs = require('fs');
//     const path = require('path');

//     var relativePath = path.relative(process.cwd(), dir);

//     try {
//         var stat = fs.lstatSync(relativePath);
//         return stat.isDirectory();
//     } catch (e) {
//         // lstatSync throws an error if path doesn't exist
//         return false;
//     }
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// function list(dir) {
//     const fs = require('fs');
//     const path = require('path');

//     fs.readdir(dir, (err, entries) => {
//         if (err) throw err;

//         for (const entry of entries) {
//             let fullPath = path.join(dir, entry);
//             // let fullPath = dir + "/" + entry;
//             // console.log("Checking: " + fullPath);
//             if (isDir(fullPath)) {
//                 console.log(fullPath)
//                 list(fullPath);
//             } else {
//                 console.log(fullPath);
//             }
//         }
//     });
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -











// // Node 8+
// // Reference material
// // https://stackoverflow.com/questions/18052762/remove-directory-which-is-not-empty/32197381
// const removeDirectoryAsync = async (dir, silent = true) => {
//     if (!silent){
//         log("aftc.node-utils: removeDirectoryAsync(dir:" + dir + ",silent:" + silent + ")", "yellow");
//     }

//     const fs = require('fs');
//     const path = require('path');
//     const util = require('util');

//     const readdir = util.promisify(fs.readdir);
//     const lstat = util.promisify(fs.lstat);
//     const unlink = util.promisify(fs.unlink);
//     const rmdir = util.promisify(fs.rmdir);

//     try {
//         const files = await readdir(dir);
//         await Promise.all(files.map(async (file) => {
//             try {
//                 const p = path.join(dir, file);
//                 const stat = await lstat(p);
//                 if (stat.isDirectory()) {
//                     await removeDir(p);
//                 } else {
//                     await unlink(p);
//                     if (!silent){
//                         log(`aftc.removeDirectory(): Removed file: ${p}`, "green");
//                     }
//                 }
//             } catch (err) {
//                 console.error(err);
//             }
//         }))
//         await rmdir(dir);
//         if (!silent){
//             log(`aftc.node-utils: removeDirectory(): Removed dir: ${dir}`, "green");
//         }
//     } catch (err) {
//         if (!silent) {
//             console.error("aftc.node-utils: removeDirectory(): Error")
//             console.error(err);
//         }
//     }

// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// function removeSync(path,silent=true){
//     if (!silent) {
//         log(`aftc.node-utils: removeSync(path:${path}, silent:${silent})`,"yellow");
//     }

//     try {
//         fs.removeSync(path)
//         if (!silent) {
//             log(`aftc.node-utils: removeSync(): Completed!`,"green");
//         }
//     } catch (err) {
//         log(`aftc.node-utils: removeSync(): FAILED!`,"red");
//         console.error(err)
//     }
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







// async function checkFileExistsSync(filePath, delay = 0, failAfter = 4, silent = true) {
//     let t = 0;
//     let limit = delay + failAfter;

//     if (!silent) {
//         log(`aftc-node-utils: checkFileExistsSync(): File [${filePath}], delay:[${delay}], failAfter:[${failAfter}], silent:[${silent}]`, "yellow");
//     }

//     return promise = new Promise((resolve, reject) => {
//         let timer = setInterval(() => {
//             t++;
//             // log(t);

//             // Limit reached
//             if (t > limit) {
//                 // limit reached and still no file, something gone wrong!
//                 log("aftc-node-utils: checkFileExistsSync(): File [" + filePath + "] NOT FOUND!", "red");
//                 clearTimeout(timer);
//                 timer = null;
//                 resolve(false);
//                 return;
//             }

//             // Optional check delay
//             if (t > delay) {

//                 fs.pathExists(filePath, (err, exists) => {
//                     if (err){
//                         console.error("aftc.node-utils: checkFileExistsSync(pathItem:"+pathItem+"): Error")
//                         console.error(err);
//                     } else {
//                         if (exists){
//                             if (!silent) {
//                                 log("aftc-node-utils: checkFileExistsSync(): File [" + filePath + "] FOUND!", "green");
//                             }
//                             clearTimeout(timer);
//                             timer = null;
//                             resolve(true);
//                         } else {
//                             if (!silent) {
//                                 log("aftc-node-utils: checkFileExistsSync(): File [" + filePath + "] not available yet...", "yellow");
//                             }
//                         }

//                     }
//                 })
//             } else {
//                 if (!silent) {
//                     log("aftc-node-utils: checkFileExistsSync(): Wait " + t, "yellow");
//                 }
//             }

//         }, 1000);
//     });
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// async function getFileContentsBetweenMarkersSync(filePath,startMarker,endMarker,silent=true,showLinesAdded=false) {
//     if (!silent){
//         log(`getFileContentsBetweenMarkersSync(
//     filePath:${filePath},
//     startMarker:${startMarker},
//     endMarker:${endMarker},
//     silent:${silent}`,"yellow");
//     }

//     const readline = require('readline');
//     let lines = [];
//     let newFile = "";
//     let lineNo = 0;
//     let linesAdded = 0;
//     let open = false; // flag for // CStart

//     return promise = new Promise((resolve, reject) => {
//         let rl = readline.createInterface({
//             input: fs.createReadStream(filePath)
//         });

//         rl.on('line', function (line) {
//             lineNo++;

//             if (!open) {
//                 if (line.indexOf(startMarker) > -1) {
//                     open = true;
//                     // newFile += line + "\n";
//                     // linesAdded++;
//                     // if (!silent && showLinesAdded){
//                     //     log("ADDING ["+lineNo+"]: " + line,"yellow");
//                     // }
//                 }
//             } else {
//                 if (line.indexOf(endMarker) > -1) {
//                     open = false;
//                 } else {
//                     if (!silent && showLinesAdded){
//                         log("ADDING ["+lineNo+"]: " + line,"yellow");
//                     }
//                     newFile += line + "\n";
//                     linesAdded++;
//                 }


//             }
//         });

//         rl.on('close', function (line) {
//             if (!silent && showLinesAdded){
//                 log('Processed ' + lineNo + " lines...","green");
//                 log('New file has ' + linesAdded + " lines...","green");
//             }

//             resolve(newFile);
//         });


//     });
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



