// waf to add two number (with Function expression)

// const sum = function(a,b){
//     console.log('i am regular expression');
//     console.log(a+b);

// }
// sum(3,4);


// // make same function with arrow funtction
// // fat arraow (=>) 

// const arrowSum = (a,b)=>{
//     console.log("i am arrow function");
//     console.log(a+b);
// }
// arrowSum(5,5);


// benifits of arrow function =>

// less syntax :

// let arrowFun = name =>console.log(`Given name is ${name}`);  // when single param there then no need of oaranthisis as well for param

// arrowFun('sharma');


// // return vaule automatically =>

// arrowFun = (a,b) => a+b;

// console.log(arrowFun(2,3)); // 5 


// arrow function with this keyword =>


// //inside function =>

// const arrowFun = ()=>{
//     console.log(this);
// }
// arrowFun(); // {} this prints emprty object

// // inside the object method => arrow function return empty object with arrow function every where 

// const obj = {
//     name : "vijay das",
//     age: 27 ,
//     thisArrow : ()=>{
//         console.log(this.name); 
//     }
// }
// // obj.thisArrow(); // {} empty obj





