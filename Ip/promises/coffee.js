// write a promise for a coffee order then make other promise for served that coffee order :
// use promisised solution for that .. promise hell 
// promise hell = when we use then  chaining for solving promises that is called promise hell 

// this function is promise for oder of coffee :
function orderCoffee(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve('coffee order');
        } else {
            reject('drink not available');
        }
    })
}

// this promise resolve after coffee order and this will simply serve the order so no need to reject method here 
function orderPlaced(order) {
    // reject not requird bcz it will just serve the coffee after coffee order confrimed
    return new Promise(function (resolve) {
        console.log("Your order is being prepared");
        resolve(`${order} is Served`);
    });
}


// this is then chaining =>
// oderCoffee will resolve here 
orderCoffee('coffee').then(function (demand) {
    console.log(demand);
    // after resolve coffee order call orderPlaced promise
    let orderPlacedPromise = orderPlaced(demand)
    return orderPlacedPromise;
    // order served resolve handle by this then
}).then(function (orderIsProsessed) {
    console.log(orderIsProsessed);
    // if any rejection found during coffee order may be drink not availble insted of coffee  
}).catch(function (err) {
    console.log(err);
})

// syntatic sugar => optimzed and syntatic solution of any code for easyness is called synatatic solution just like async await is replecment of then chaining

