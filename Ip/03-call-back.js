function printFirstName(firstName, cb) {
    console.log(firstName);
    cb('karki');
}

function printLastName(lastName) {
    console.log(lastName);
}

printFirstName("gaurav", printLastName);


// caluculator using callBack =>


function calc(add, subtract, divide, multiply) {
    add(2, 3);
    subtract(3, 2);
    divide(4, 2);
    multiply(2, 3);

}

function addCB(num1, num2) {
    console.log(num1 + num2);
}

function subtractCB(num1, num2) {
    console.log(num1 - num2);
}

function divideCB(num1, num2) {
    console.log(num1 / num2);
}

function multiplyCB(num1, num2) {
    console.log(num1 * num2);
}

calc(multiplyCB, addCB, subtractCB, divideCB);



