const fs = require('fs');
const path = require("path");
// read file data from other file 
// let readFile = fs.readFileSync('./file.txt');
// console.log("this is with concatintaion encoding : " + readFile); // encode this way or use utf-8

// read file usinging utf-8
 readFile = fs.readFileSync("../text", "utf-8");
console.log(readFile);


// wirtefile => if there is no such file available then it will genrated automatically with same name passed at pramas

// let writeFile = fs.writeFileSync("./Writefile2.txt" , " this conetnt from writeFile Method of fs Module");
// console.log("file added");


// update file :  append a file => append file is method which used for update content of given file 

// fs.appendFileSync("./file.txt" , " this is data from appendFileSync"); // if there is no file num avilable t will create that one with same as given name at params
// console.log("file.txt updated");

// delete file =>  unlinkSync method used to delete a file :

// fs.unlinkSync("./file.txt"); // if ther no such file available then it will gives the error
// console.log("file.txt is deleted");


               //***   Directories      ***//

// create , delete , check , stats , content

// create a new directory =>

// fs.mkdirSync('./myDirectory'); // mkdir for making new Directory

// delete direcotry :
// fs.rmdirSync("./myDirectory"); // rmdir

// lstateSync => provide details about files and dir 

// let statistics = fs.lstatSync("text.js")
// console.log(statistics); // it has all meta data of file
// // provide details given file is file or not if yes then return true =>
// console.log("is File ? : " , statistics.isFile()); // is File ? :  true

// console.log("is directory ? :" , statistics.isDirectory()); // is directory ? : false( bcz its js file not a dir)

// readFileSync => is method which is used to see content inside directory =>

// let folderPath = 'M:\\pep\\NodeJs\\Day-5' // path of dir
// console.log(folderPath);
// console.log(fs.readdirSync(folderPath)); // all  conetnt of of that dir will visibal



// copy one file one dir to other ( src to dsetination) =>

// let srcFilePath = 'M:\\pep\\NodeJs\\Day-5\\child process.png'

// let dstFolderPath = 'M:\\pep\\NodeJs'

// let tobecopiFileName = path.basename(srcFilePath) //child process.png
//  // join will concact the tobecopiFileName to dstFolderPath ending 
// let makeDstPath = path.join(dstFolderPath , tobecopiFileName); //  making dstPath for file  (M:\\pep\\NodeJs\\child process.png)

// fs.copyFileSync(srcFilePath , makeDstPath);
// console.log("file is copied successfully"); // img copied successfully into M:\\pep\\NodeJs' with new path  M:\\pep\\NodeJs\\child process.png