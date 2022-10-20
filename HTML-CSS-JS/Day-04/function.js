// normal function

function sayHi(){
    console.log("Hay hi");
}

sayHi();
// function expression || first class ciztizen function

let fun = function (){
    console.log("say hi by funHi");
}

fun();

// IIFE ( IMMEDIATELY INVOKED EXPRESSION)

let iffe = function(a ,b){
  console.log(a+b);
}(2,3); // once call and killed same time

// above one or this one both are same
 function(a,  b){
  console.log(a+b);
}(2,3); // once call and killed same time


