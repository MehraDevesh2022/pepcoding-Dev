
// this keyword is for reference purpose to any object or element
// with browser in non stict mode
// this keyword's value will depend upon how it is called



// globaly call krne pe =>
// console.log(this); // it  pointing global object => window


// inside function =>

const fun = ()=>{
  console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
// fun();  // pinting global object here as well

// inside the object function =>

let obj = {
  name : "batman",
  from : 'DC',
  useThis : function(){
   console.log(this);
  }
}

// obj.useThis(); //{name: 'batman', from: 'DC', useThis: ƒ} object ke andar ek method mein this ki value object itself hoti hai




// inisde object ke function ke functio ke andar

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


obj2.thisUse(); // object ke adnadr ke andar ke andar ka function global value print krta hai