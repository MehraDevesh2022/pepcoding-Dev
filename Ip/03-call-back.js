function printFirstName(firstName , cb) {
    console.log(firstName);
    cb('karki');
}

function printLastName(lastName){
    console.log(lastName);
}

printFirstName("gaurav", printLastName);


// caluculator using callBack =>


function calc(add , subtract , divide, multiply){
     addCB(2,3);
     subtractCB(3,2);
     divideCB(4,2);
     multiplyCB(2,3);

}

function addCB(num1 , num2){
    console.log(num1+num2);
}

function subtractCB(num1 , num2){
    console.log(num1-num2);
}

function divideCB(num1 , num2){
    console.log(num1/num2);
}

function multiplyCB(num1 , num2) {
    console.log(num1*num2);
}

calc(multiplyCB ,addCB ,subtractCB , divideCB);


