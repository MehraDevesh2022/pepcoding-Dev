// all function get memeory in heap
fun1();
function fun1(){ // get memory in heap
console.log("hello i am function statment");

}

// variable function =>

var fun2 = function () { // initial it will undefind in memory
    console.log("i am variable function");
}

// arrow function :

var fun3 = () =>{ // imitially it will also undefined
    console.log("hello i am arrow function");
}

// IIFFE
(function IIFFE() { // it will get memory before just exicution
    console.log("hello this is IIFFE function");
})()