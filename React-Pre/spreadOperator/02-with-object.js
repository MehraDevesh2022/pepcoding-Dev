let obj = {
  name: "Adam",
  address: {
    country: "USA",
    state: {
      stateName: "New York",
      pincode: 123456,
    },
  },
};

let obj2 = obj;

obj2.name = "Roy"

// console.log(obj);
// console.log(obj2);

/*
 {
  name: 'Roy',
  address: { country: 'USA', state: { stateName: 'New York', pincode: 123456 } }
}
{
  name: 'Roy',
  address: { country: 'USA', state: { stateName: 'New York', pincode: 123456 } }
}

 */

// but for nesetd object it won't work like that way

// obj2.address.country ="India"

// console.log(obj2);
// console.log(obj);
/**
 here we go both value changed : so we need to use diifret way here speard operator with nested value
 {
  name: 'Roy',
  address: {
    country: 'India',
    state: { stateName: 'New York', pincode: 123456 }
  }
}
{
  name: 'Roy',
  address: {
    country: 'India',
    state: { stateName: 'New York', pincode: 123456 }
  }
} 
 */
// for nested object used this way sperad operator
obj2 = {...obj , address :{...obj.address , state :{...obj.address.state}}};

// now only obj2 will effected
obj2.address.country = "India";

console.log(obj2);
console.log(obj);

/*
now obj2 has it own addess completeyly 
{
  name: 'Roy',
  address: {
    country: 'India',
    state: { stateName: 'New York', pincode: 123456 }
  }
}
{
  name: 'Roy',
  address: { country: 'USA', state: { stateName: 'New York', pincode: 123456 } }
}
*/