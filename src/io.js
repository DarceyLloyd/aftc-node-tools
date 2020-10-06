const fs = require('fs-extra');
const path = require('path');
const util = require('util');
const log = require('debug').log;



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






// function getFilesSync(dir, suffix, recurse = true) {
//     // log("reading: " + dir);
//     let files = [];
//     var dirRead = fs.readdirSync(dir);
//     for (var i in dirRead) {
//         var fileName = dir + '/' + dirRead[i];
//         if (fs.statSync(fileName).isDirectory()) {
//             if (recurse == true) {
//                 let recursionRead = getFilesSync(fileName, suffix);
//                 // log("ADDING: " + recursionRead.length + " files");
//                 files = files.concat(recursionRead);
//             }
//         } else {
//             if (fileName.indexOf(suffix) > -1) {
//                 files.push(fileName);
//             } else {

//             }
//         }
//     }
//     return files;
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



