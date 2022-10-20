'use strict'
// globaly use this =>
console.log(this); // returng window object 


// inside function =>
function fun(){
    console.log(this);
}
// fun(); // strict mode main function ke andr this ki value undefined hoti hai  

// inisde object =>
let obj = {
  name: "batman",
  from: "DC",
  useThis: function () {
    console.log(this);
  },
};
 
// obj.useThis(); // object ke andar ek method mein this ki value object itself hoti hai


let obj2 ={
    name : "spiderboy",
    from : "mcu",
    thisUse : function(){
    function insideFun() {
      console.log(this);
    }
    insideFun(); 
    }
}

obj2.thisUse();  // undefined  => strict mode main object ke andar method ke andr method main this ki value undefined hoti hai