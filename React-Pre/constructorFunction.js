// constructor function is tamplet for a object with some defined property : 
// constrcuore function has access of this key word invoked by new keyword and this keyword provide an empty object for definring property and methods  
function car(Name , Model , Color){ //car objects value as an parameter
    this.name = Name
   this.model = Model
   this.color = Color

   this.test = function(){ 
   console.log(`this model is ${this.model} `);
   }

}


let car1 = new car('BMW' ,'x6' , 'white'); // new keyword provide here access of this keyword and call constructor function pith parameters 
let car2 = new car('Mercedes' , 'S class' ,'red');

console.log(car1);
console.log(car1.test()); // this model x6 

/* 
car {
  name: 'BMW',
  model: 'x6',
  color: 'white',
  test: [Function (anonymous)]
}

*/
console.log(car2);
/** output :
 * car {
  name: 'Mercedes',
  model: 'S class',
  color: 'red',
  test: [Function (anonymous)]
}
 */

// how get size of object=> use Object.keys retrun key as an array
console.log(Object.keys(car2)); // [ 'name', 'model', 'color', 'test' ]
let length = Object.keys(car2).length;

console.log(length); // 4