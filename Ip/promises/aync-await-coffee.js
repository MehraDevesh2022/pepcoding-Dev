// write a promise for a coffee order then make other promise for served that coffee order :
// use async await soultion instead of then chaining
// aync await are optimized and syntatic solution for handle promises

function orderCoffee(drink){
  return new Promise(function(resolve, reject){
      if (drink === 'coffee')
          resolve('order for coffee')
          else{
            reject('drink not available here')
          }
  })
}

// order served promise function =>


function orderServed(order){
    return new Promise(function(resolve , reject){
      console.log("hey wait sec your order is being prepeard");
      resolve(`${order} served`);
    })
}

async function coffeeShop(){
  try{
      let myCoffee = await orderCoffee('coffee');
      console.log(myCoffee);
      let myOrder = await orderServed(myCoffee);
      console.log(myOrder);
  }catch(err){
    console.log(err);
  }
}
coffeeShop();