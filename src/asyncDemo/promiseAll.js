function runPromise1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('runPromise执行完毕');
      resolve('1 is over');
    },2000)
  })
}

function runPromise2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('2 is over');
    },1000)
  })
}

//
// Promise
//   .all([runPromise1(),runPromise2()])
//   .then(function (result) {
//   console.log(result);
// });




function createErr(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('XX加载成功');
    }, 6000);
  });
}

function timeOut(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      reject('XX请求超时');
    }, 5000);
  });
}

//race 以快的为准 但并不会结束其余Promise的运行.
Promise
  .race([createErr(), timeOut()])
  .then(function(results){
    console.log(results);
  })
  .catch(function(reason) {
    console.log(reason);
});