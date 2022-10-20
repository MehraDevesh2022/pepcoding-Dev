let car ={
    name : "Nano",
    cost : 100000,
    color : "red",
    speed : "120 km/hr",
    engine : "800cc"
}

let cap = {
    firstName : "steve",
    lastName : "roggers",
    friends : ['buky' , 'tony' , 'bruce banner'],
    address :{
        state : "Manhatan",
        city : "new york",
    },
   sayHi : function (){
        console.log('Console log');
    }
}


// dot notaion
console.log(cap.firstName);
console.log(cap.address);
console.log(cap.address.city);
console.log(cap.friends[2]); // array value 

// bracket notaion
console.log(cap['address']);
console.log(cap['address']['city']);
console.log(cap["friends"][0]);


// function 
cap.sayHi();


// for in loop for object : access each key  from obj also dot notaion not work here 

for(let key in cap){
    console.log('Key' ,key , "value" ,cap[key] );
    
}


cap.friends[4] = "natasha" // friends: [ 'buky', 'tony', 'bruce banner', <1 empty item>, 'natasha' ],

cap.isAvanger = true

delete cap.address
console.log(cap);