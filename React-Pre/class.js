// class is blue print for an object in js same as function constructor 
// inside the class we have constructor function for define objects property


// make a class for student object =>
class student{
  constructor(name ,age , section ,rollNo){ // here it is a class constructor
            this.Name = name,
            this.Age = age,
            this.Class = section,
            this.RollNo = rollNo 
            this.fun = ()=>{
                console.log('hello class');
            }
        }
}

let student1 = new student('chiti' , '12' , 'B' , 21);  // student1 is instance of student class
let student2 = new student('vijay' , 22, 'A' , 98989)

console.log(student1); //student { Name: 'chiti', Age: '12', Class: 'B', RollNo: 21 }
console.log(student2); //student { Name: 'vijay', Age: 22, Class: 'A', RollNo: 98989 }



// inheritance with class => use extend key word for inharit property of other class
// we have option to in harit one or more class at a time
// use super() method for inherit other class property

class Teacher extends student {
    constructor(name , age , post){
           super(name , age); // we are accessing this.Name property from student class just passing value from param for name and age property used from student class fro them
           this.Post = post; 
    }
} 

let teacher1 = new Teacher('Satayam acharya ji' ,38 , 'Maths teacher')
console.log(teacher1);
/* class Techers instance created here : 
Teacher {
  Name: 'Satayam acharya ji', // proprty access from student
  Age: 38,                   // // proprty access from student class
  Class: undefined,
  RollNo: undefined,
  fun: [Function (anonymous)],
  Post: 'Maths teacher'
}

*/


class person extends Teacher{
    constructor(name , age , post, address)
    {
        super(post),
        this.address = address,
         this.state ={
            count : 0,
           },
          
           this.fun =() =>{
                console.log("this" ,this.state);
           }


    }
}

let person1 = new person('jone doe' , 44, 'hero' , 'internet')
console.log(person1.fun());

/*
person {
  Name: 'hero',
  Age: undefined,
  Class: undefined,
  RollNo: undefined,
  fun: [Function (anonymous)],
  Post: undefined,
  address: 'internet'
}

*/