let sleep = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time); })
};
let start = async function () {
// 在这里使用起来就像同步代码那样直观
  console.log('start');
  await sleep(3000);
  console.log('end');
};

start();