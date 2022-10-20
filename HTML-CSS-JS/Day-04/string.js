let str  = 'pepCoder';

console.log(str.length); // 8

// slice() =>

let sliceElm = str.slice(3 , 7); // starting elm , endElm+1
console.log(sliceElm); // code

// substing() =>

let subS = "hello subString value";

let ansStr = subS.substring(6 , 15); // satrtelm to end elm
console.log(ansStr);

// concat();

let con1 ="hello"
let con2 = 'world'

let ans = con1.concat(' ' , con2 ,'!'); 
console.log(ans);

// trim() =>used for white space

let space = '     hello  world2        !'
let ansSpace = space.trim(); // hello  world2    !
console.log(ansSpace.trimEnd());

console.log;

// lowrcase and upper case

let lwr = 'hello  world'
console.log(lwr.toUpperCase()); //HELLO  WORLD

// upr to lwr case
let upr = "HELLO  WORLD!!";
console.log(upr.toLowerCase()); // hello  world!!


// replace() =>

let val1 = 'hello this is val1';
console.log(val1.replace('val1' , 'val2')); // hello this is val2



