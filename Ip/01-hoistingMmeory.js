console.log(a);

var a = 10;
console.log(a);

function fun1() {
    console.log("inside fun1",a); 
    var a = 30;
    a = 20;
}
console.log(a);
fun1();
console.log(a);
/*
undefined
10
10
inside fun1 undefined
10

*/


console.log(a);

var a = 10;
console.log(a);

function fun1() {
  console.log("inside fun1", a); // now a =10  it will chech memory in his laxical scope
//   var a = 30;
//   a = 20;
}
console.log(a);
fun1();
console.log(a);
/*
undefined
10
10
inside fun1 undefined
10

*/