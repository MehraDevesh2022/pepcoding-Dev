// normal mode in node use of this

// globaly =>
console.log(this); // {} empty object 


// inside function =>

function fun() {
  console.log(this);
}
fun();  // normal mode main function ke andar this global object ko point krta hai


// inisde object =>
let obj = {
  name: "batman",
  from: "DC",
  useThis: function () {
    console.log(this);
  },
};

obj.useThis();  // inside object method return object itself

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

obj2.thisUse(); // inside object->method ke andar method main  this global object deta hai 


