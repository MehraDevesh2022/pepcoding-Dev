'use strict'
// globaly use this =>
console.log(this); // {}  globaly in node return empty object 


// inside function =>
function fun(){
    console.log(this);
}
fun(); // node strict mode mai function ke andar this ki value undefined hoti hai

// inside object =>

// inisde object =>
let obj = {
  name: "batman",
  from: "DC",
  useThis: function () {
    console.log(this);
  },
};

obj.useThis(); // object ke andr method ke main this ki value object itshelf hoti hai
// { name: 'batman', from: 'DC', useThis: [Function: useThis] }


let obj2 = {
  name: "spiderboy",
  from: "mcu",
  thisUse: function () {
    function insideFun() {
      console.log(this);
    }
    insideFun();
  },
};

obj2.thisUse();//undefined  // node strict mode main object ke method ke andar method main this ki value undefined hoti hai  




