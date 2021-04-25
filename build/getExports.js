const path = require('path');
const { log, cls } = require("../src/debug");
const { getFilesSync } = require("../src/io");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function getExports() {
    let exp = "";

    let requireFilesDir = path.resolve(__dirname+"../../src");
    // log(requireFilesDir);
    
    let requireFiles = getFilesSync(requireFilesDir,".js",true);
    // log(requireFiles);


    let basePath = path.resolve(__dirname+"../../");    
    const modules = [];
    const fileInfos = [];

    requireFiles.forEach(file =>{
        // log(file);
        let fileName = path.basename(file).toLowerCase();
        let ext = path.extname(file).toLowerCase();
        let fileNameNoExt = fileName.replace(ext,"");
        
        let requireFilePath = "." + file.replace(basePath,"")
        // requireFilePath = requireFilePath.replace(/\/\//g, "/"); // replaces all // to / (g flag)
        requireFilePath = requireFilePath.replace(/\\/g, "/"); // replaces all \\ to / (g flag)
        // requireFilePath = requireFilePath.replace(ext,"");

        let info = {
            file,
            fileName,
            ext,
            fileNameNoExt,
            requireFilePath
        };
        // log("----");
        // log(info);

        fileInfos.push(info)

        const requireString = "const " + fileNameNoExt + " = require('" + requireFilePath + "')";
        exp += requireString + "\n";

        // require the module dynamically so we can iterate through objects methods in the next loop
        // Why 2 loops? generate requires first then modules.exports and keeps it simpler
        modules.push(require(file));
    })


    exp += "\n";
    exp += "module.exports = {\n";

    for (const key1 in modules) {
        // log(key1);
        const module = modules[key1];
        const fileInfo = fileInfos[key1]
        for (const key2 in module) {
            // log(key2);
            if (Object.hasOwnProperty.call(exp, key2)) {
                log(("AFTC-NODE-TOOLS: Root module exports unique export duplicate detected [" + key2 + "]").red);
            } else {
                // log(key2 + ":" + fileInfo.fileNameNoExt);
                exp += "\t" + key2 + ":" + fileInfo.fileNameNoExt + "." + key2 + "," + "\n";
            }
        }
    }
    exp += "}\n";


    return exp;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




module.exports = {
    getExports
}