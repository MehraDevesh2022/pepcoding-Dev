const fs = require("fs");


// syncronus way to read file =>
// console.log("before");

// let data = fs.readFileSync("./f1.txt");
// console.log("This data is File data -->" + data);

// console.log("After");

/* output :
before
This data is File data -->i am from f1.txt
After
*/



// aync way to read file =>

console.log('before');

fs.readFile('./f1.txt' , cb); // this call back function handled inside readFile() function if file readed then data passed else error passed from readFile

function cb(err , data){
if(err){
    console.log(err);
}else{
    console.log('f1.txt in aync readed ->' + data);
}
fs.readFile("./f2.txt", cb2);
}


function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("f2.txt in aync readed ->" + data);
  }
}



console.log("after");


/*
before
after
f2.txt in aync readed ->i am from f2.txt file
f1.txt in aync readed ->i am from f1.txt


// order never spcified from call back : for that we need to call one call function to another call back function inside
*/

