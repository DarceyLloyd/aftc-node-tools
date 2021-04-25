# aftc-node-tools
A collection of tools/utilities that I find useful when working with node.

### Usage
Best to see for yourself, run each file in the test folder with
```
node <file_name>
```

### log
```
const aftc = require("../aftc-node-tools");
const cls = aftc.cls;
const log = aftc.log;

cls();
log("All For The Code".red);
log("All For The Code".green);
log("All For The Code".blue);
log("All For The Code".cyan);
log("All For The Code".yellow);
log("All For The Code".underline.red);
log('All For The Code'.underline.green);
log('All For The Code'.inverse);
log('All For The Code'.rainbow); 
log('All For The Code'.trap);
log('All For The Code'.trap.bgRed.white);
```


### getFilesSync(dir, ext, recurse = false, includeHiddenFiles = false)
string: dir: "./" etc
string: ext: * || *.* || .js || jpg || etc
boolean: recurse: true || false (optional)
boolean: includeHiddenFiles: true || false (optional)
```
let files1 = getFilesSync("./", "*")
let files2 = getFilesSync("./", "*", true)
let files3 = getFilesSync("./", "*", true, true)
```


### writeFileSync(path, data, onComplete = false) 
```
function onCompleteFunction(){
    console.log("file created!");
}
aftc.writeFileSync("./io.json",JSON.stringify(filesArray),onCompleteFunction);
```
