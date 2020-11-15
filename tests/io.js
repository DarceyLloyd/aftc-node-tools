const aftc = require("../aftc-node-tools");
const cls = aftc.cls;
const log = aftc.log;
const getFilesSync = aftc.getFilesSync;

cls();

// getFilesSync(dir, ext="*", relative = true, includeHidden = false, recurse = false) {
let files = aftc.getFilesSync("../", "*", true, false, true);

log("aftc.io.getFilesSync".green);
log(files);

function onCompleteFunction(){
    log("JSON File created!".green);
}
aftc.writeFileSync("./io.json",JSON.stringify(files),onCompleteFunction);