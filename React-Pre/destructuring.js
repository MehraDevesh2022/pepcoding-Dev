//  with Array =>

let arr = [12,3,4,'hi','bro'];

let a1 = arr[0];
let b1 = arr[1];

// console.log(a1);
// console.log(b1);

// with destructring =>
let [a , b, c ,d ,e] = arr;

console.log(a); //12
console.log(b);  //3
console.log(c); //4
console.log(d); // hi
console.log(e); //bro


let array = [1, 4, 'hello' ,'usa'];

let [x ,y , z,  , val ="world" , x1]= array; // we have option leave empty and add new 
console.log(x); //1
console.log(y); //4
console.log(z); // hello
console.log(val); // world
console.log(x1); //undefined ( bcz there are on;y 4 value)


// with object => key value requird for access data

let obj ={
      name : 'sonu',
      state : 'up',
      age : 20,
      h : '5ft'
}

// key value requird =>

let {name , state  , age , pincode , h : height} =obj;

console.log(name); // sonu
console.log(state); // up
console.log(age);  // 20
console.log(pincode); // undefined //there is no value like pincode in obj
console.log(height); // 5ft we have optin to change key name using key
// nested objects :

let obj2 = {
    name2 : 'Batman',
    address:{
        country : 'usa',
        state:{
            stateName : " gotham pd",
            pincode1 : 3232,
        }
    }
}

let {name2} = obj2;

console.log(name2); // batman

let {address :{country} , address :{state : {stateName : rajya } , state:{pincode1}}} = obj2 // this is how nesetd object accessed with destrcuting

console.log(country);
console.log(rajya);
console.log(pincode1);

