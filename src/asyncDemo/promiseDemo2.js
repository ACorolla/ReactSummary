/*
* Promise应用方式
* */
function runPromise() {
  return new Promise(function (resolve, reject) {
    console.log('执行开始');
    setTimeout(function () {
      let num = Math.ceil(Math.random()*10);
      console.log('thi num is:',num);
      num <= 5 ? resolve(num) : reject('数字大于5');
    },2000);
  })
}

function runPromise2() {
  return new Promise(function (resolve, reject) {
    console.log('执行开始');
    setTimeout(function () {
      console.log('runPromise2执行完毕');
    },2000);
  })
}

/*
* Promise.then 接收两个回调 第一个为成功回调(resolve)  第二个为失败回调(reject)
* 也可Promise.then(function(data){}).catch() then里面是成功的回调, catch为reject。
* 与then的第二个参数不同的是, catch不会终止js的运行。
*
*
* */
let test = runPromise().then(function (data) {
    console.log(data);
    return runPromise2();
},function (reason) {
    console.log('rejected');
    console.log(reason);
});

console.log(test);