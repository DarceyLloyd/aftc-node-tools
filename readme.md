# <b>AFTC NODE TOOLS v0.7.6</b>
### <b>A collection of tools/utilities that I find useful when working with node.</b>
<br>

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
<hr><br><br>


## <b>Available Methods & Class's:</b>

 - enableLog()
 - disableLog()
 - log()
 - cls()
 - concatFiles(filesArray)
 - isFile(path)
 - isDir(path)
 - getFilesSync(dir,ext,recurse,includeHidden)
 - writeFile(filePath)
 - promiseWriteFile(filePath)
 - readFileToString(filePath)
 - isArray(input)
 - isEven(n)
 - isOdd(n)
 - roundTo(v,dec)
 - cutStringTo(s,len)
 - escapeHTML(str)
 - getCleanJSONString(str)
 - getFileExtension(filePath)
 - getFileExtension2(filePath)
 - getLastPartOfUrl(url)
 - getRandomString(len)
 - getStringBetween(str,start,end)
 - getStringsBetween2(str,start,end)
 - inString(needle,haystack)
 - leftTrim(str,noOfChars)
 - rightTrim(str,noOfChars)
 - ucFirst(str)
 - isEmail(email)


<hr><br><br>

# <b>Documentation</b>

## <b>enableLog()</b>
<b>Information:</b><br>
Enables log command globally.<br>


<hr><br><br>

## <b>disableLog()</b>
<b>Information:</b><br>
Disables log command globally.<br>


<hr><br><br>

## <b>log()</b>
<b>Information:</b><br>
Shortcut for console.log supports logging in colors.<br>
```
const aftc = require('aftc-node-tools');
const cls = aftc.cls;
const log = aftc.log;
cls();
log( ('All For The Code ' + 44).green );
log('All For The Code'.red);
log('All For The Code'.green);
log('All For The Code'.blue);
log('All For The Code'.cyan);
log('All For The Code'.yellow);
log('All For The Code'.underline.red);
log('All For The Code'.underline.green);
log('All For The Code'.inverse);
log('All For The Code'.rainbow); 
log('All For The Code'.trap);
log('All For The Code'.trap.bgRed.white);
```


<hr><br><br>

## <b>cls()</b>
<b>Information:</b><br>
Clears the console.<br>
```
cls();
```


<hr><br><br>

## <b>concatFiles(filesArray)</b>
<b>Information:</b><br>
Concatinates all files in the array into a string.<br>
#### <b>Parameters:</b>
- <b>Name:</b> filesArray<br>
<b>Type: </b>Array<br>
<b>Required: </b>true<br>
<b>Info: </b>Array of files.<br>

<b>Returns:</b>
String<br>
```
let files = ['file1.js','file2.js']
concatFiles(arr)
```


<hr><br><br>

## <b>isFile(path)</b>
<b>Information:</b><br>
Checks if path is a file.<br>
#### <b>Parameters:</b>
- <b>Name:</b> path<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>Path you want to check is a file.<br>

<b>Returns:</b>
Boolean<br>
```
if ( isFile('./file1.js') ){
	log('Its a file!')
} else {
	log('That aint no file!')
}
```


<hr><br><br>

## <b>isDir(path)</b>
<b>Information:</b><br>
Checks if path is a directory.<br>
#### <b>Parameters:</b>
- <b>Name:</b> path<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>Path you want to check is a directory.<br>

<b>Returns:</b>
Boolean<br>
```
if ( isDir('./mydir') ){
	log('It exists!')
} else {
	log('Nooooo!')
}
```


<hr><br><br>

## <b>getFilesSync(dir,ext,recurse,includeHidden)</b>
<b>Information:</b><br>
Gets an array of files in a directory. Hidden files start with a . (linux style, not windows)<br>
#### <b>Parameters:</b>
- <b>Name:</b> dir<br>
<b>Type: </b>Array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Directory.<br>

- <b>Name:</b> ext<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>*<br>
<b>Info: </b>Array of files.<br>

- <b>Name:</b> recurse<br>
<b>Type: </b>Boolean<br>
<b>Required: </b>false<br>
<b>Default: </b>false<br>
<b>Info: </b>Array of files.<br>

- <b>Name:</b> includeHidden<br>
<b>Type: </b>Boolean<br>
<b>Required: </b>false<br>
<b>Default: </b>false<br>
<b>Info: </b>Array of files.<br>

<b>Returns:</b>
Array<br>
```
let files = getFilesSync('./src', '.js', true);
```


<hr><br><br>

## <b>writeFile(filePath)</b>
<b>Information:</b><br>
Writes data to a file.<br>
#### <b>Parameters:</b>
- <b>Name:</b> filePath<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>Path to file you want to write to (will create it if it doesnt exist).<br>

<b>Returns:</b>
Boolean<br>
```
let data = 'hello world';
writeFile('./test.txt',data);
```


<hr><br><br>

## <b>promiseWriteFile(filePath)</b>
<b>Information:</b><br>
Writes data to a file but returns a promise.<br>
#### <b>Parameters:</b>
- <b>Name:</b> filePath<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>Path to file you want to write to (will create it if it doesnt exist).<br>

<b>Returns:</b>
Promise<br>
```
let data = 'hello world';
writeFile('./test.txt', data)
   .then(() => {
       log('success')
   });
   .catch(() => {
       log('failure')
   });
```


<hr><br><br>

## <b>readFileToString(filePath)</b>
<b>Information:</b><br>
Returns a file as a string.<br>
#### <b>Parameters:</b>
- <b>Name:</b> filePath<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>Path to file you want read.<br>

<b>Returns:</b>
String<br>
```
let data = readFileToString('./test.txt');
```


<hr><br><br>

## <b>isArray(input)</b>
<b>Information:</b><br>
Detects if the supplied variable is an array or not (instance of returns object).<br>
#### <b>Parameters:</b>
- <b>Name:</b> input<br>
<b>Type: </b>*<br>
<b>Required: </b>true<br>
<b>Info: </b>The variable to check.<br>

<b>Returns:</b>
Boolean<br>
```
let varIsArray = isArray(3);
```


<hr><br><br>

## <b>isEven(n)</b>
<b>Information:</b><br>
Detects if a number is even or not.<br>
#### <b>Parameters:</b>
- <b>Name:</b> n<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The number you want to check is even.<br>

<b>Returns:</b>
Boolean<br>
```
let answer = isEven(input);
```


<hr><br><br>

## <b>isOdd(n)</b>
<b>Information:</b><br>
Detects if a number is odd or not.<br>
#### <b>Parameters:</b>
- <b>Name:</b> n<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The number you want to check is odd.<br>

<b>Returns:</b>
Boolean<br>
```
let answer = isOdd(input);
```


<hr><br><br>

## <b>roundTo(v,dec)</b>
<b>Information:</b><br>
Rounds a number to a specific amount of decimal places.<br>
#### <b>Parameters:</b>
- <b>Name:</b> v<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The number you want to round.<br>

- <b>Name:</b> dec<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The number of decimal places you wish to round to.<br>

<b>Returns:</b>
Number<br>
```
let v = roundTo(3.142,1);
```


<hr><br><br>

## <b>cutStringTo(s,len)</b>
<b>Information:</b><br>
Returns the string but to the specified length.<br>
#### <b>Parameters:</b>
- <b>Name:</b> s<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The string you want to cut.<br>

- <b>Name:</b> len<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The length (number of chars) you want returned.<br>

<b>Returns:</b>
String<br>
```
let answer = cutStringTo(str,5);
```


<hr><br><br>

## <b>escapeHTML(str)</b>
<b>Information:</b><br>
Escapes special characters in a string.<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>The string you want to process.<br>

<b>Returns:</b>
String<br>
```
let newString = escapeHTML(str);
```


<hr><br><br>

## <b>getCleanJSONString(str)</b>
<b>Information:</b><br>
Cleans a JSON string.<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>The string you want to process.<br>

<b>Returns:</b>
String<br>
```
let newJsonString = getCleanJSONString(jsonString);
```


<hr><br><br>

## <b>getFileExtension(filePath)</b>
<b>Information:</b><br>
Gets the extension of the supplied file path string.<br>
#### <b>Parameters:</b>
- <b>Name:</b> filePath<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>File path string.<br>

<b>Returns:</b>
String<br>
```
let ext = getFileExtension(filePath);
```


<hr><br><br>

## <b>getFileExtension2(filePath)</b>
<b>Information:</b><br>
Gets the extension of the supplied file path string (method 2).<br>
#### <b>Parameters:</b>
- <b>Name:</b> filePath<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>File path string.<br>

<b>Returns:</b>
String<br>
```
let ext = getFileExtension2(filePath);
```


<hr><br><br>

## <b>getLastPartOfUrl(url)</b>
<b>Information:</b><br>
Gets the last segment of a url.<br>
#### <b>Parameters:</b>
- <b>Name:</b> url<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>URL string.<br>

<b>Returns:</b>
String<br>
```
let urlLastSeg = getLastPartOfUrl(url);
```


<hr><br><br>

## <b>getRandomString(len)</b>
<b>Information:</b><br>
Returns a string to a specified length of random characters.<br>
#### <b>Parameters:</b>
- <b>Name:</b> len<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>The number of random character you want to get.<br>

<b>Returns:</b>
String<br>
```
let randomString = getRandomString(256);
```


<hr><br><br>

## <b>getStringBetween(str,start,end)</b>
<b>Information:</b><br>
Returns a sub string of of a string between specified start and end characters.<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>The source string you want to process.<br>

- <b>Name:</b> start<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>Start char position.<br>

- <b>Name:</b> end<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>End char position.<br>

<b>Returns:</b>
String<br>
```
let result = getStringBetween('test test test',5,10);
```


<hr><br><br>

## <b>getStringsBetween2(str,start,end)</b>
<b>Information:</b><br>
Returns a sub string of of a string between specified start and end characters. (method 2)<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>The source string you want to process.<br>

- <b>Name:</b> start<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>Start char position.<br>

- <b>Name:</b> end<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>End char position.<br>

<b>Returns:</b>
String<br>
```
let result = getStringBetween('test test test',5,10);
```


<hr><br><br>

## <b>inString(needle,haystack)</b>
<b>Information:</b><br>
Looks for a string inside a string.<br>
#### <b>Parameters:</b>
- <b>Name:</b> needle<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>String to search for.<br>

- <b>Name:</b> haystack<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>String to search.<br>

<b>Returns:</b>
Boolean<br>
```
let result = getStringBetween('test test test',5,10);
```


<hr><br><br>

## <b>leftTrim(str,noOfChars)</b>
<b>Information:</b><br>
Trims a string from the left.<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>String to trim.<br>

- <b>Name:</b> noOfChars<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>Number of characters to trim off.<br>

<b>Returns:</b>
String<br>
```
let result = leftTrim('test test test',5);
```


<hr><br><br>

## <b>rightTrim(str,noOfChars)</b>
<b>Information:</b><br>
Trims a string from the right.<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>String to trim.<br>

- <b>Name:</b> noOfChars<br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Info: </b>Number of characters to trim off.<br>

<b>Returns:</b>
String<br>
```
let result = rightTrim('test test test',5);
```


<hr><br><br>

## <b>ucFirst(str)</b>
<b>Information:</b><br>
Returns a string with the first character uppercase.<br>
#### <b>Parameters:</b>
- <b>Name:</b> str<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>String to trim.<br>

<b>Returns:</b>
String<br>
```
let UpperFirstString = ucFirst('mooo');
```


<hr><br><br>

## <b>isEmail(email)</b>
<b>Information:</b><br>
Checks if the supplied email is valid or not.<br>
#### <b>Parameters:</b>
- <b>Name:</b> email<br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Info: </b>Email to validate.<br>

<b>Returns:</b>
Boolean<br>
```
let isValidEmail = isEmail('darcey.lloyd@gmail.com');
```


<hr><br><br>



