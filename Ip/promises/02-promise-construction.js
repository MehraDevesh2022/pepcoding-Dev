let myPromise = new Promise(function (resolve, reject) {
  let a = "PepCoding";
  let b = "PepCoding";

  if (a === b) {
    resolve("result is resolve"); // this attched to the then
  } else {
    reject("result is rejected"); // this one attched to catch
  }
});

  myPromise.then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });

