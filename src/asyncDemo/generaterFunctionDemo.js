// function* numGenerator() {
//   let i = 0;
//   console.info('Generator function start');
//   while(i < 3) {
//     console.info('Yield start');
//     yield i++;
//     console.info('Yield end');
//   }
//   console.info('Generator function end');
// }
//
// let g = numGenerator();
/*
* 该g是返回指针, 调用next方式内部指针移动, 碰到yield 返回其右侧的值*/
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

console.log(g.next());


/*
next()可以接收任意一个参数, 该参数将作为上一个yield的返回值。
* */
// function* generateNaturalNumber() {
//   let i = 0;
//   while(i <= 100) {
//     let j = yield i;
//     console.log(j);
//     j && (i = j);
//     i++;
//   }
// }
//
// let g = generateNaturalNumber();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next(11));
// console.log(g.next());
// console.log(g.next());

/*
* yield* 将执行权托管给另外的迭代器,另外的迭代器全部处理结束后,执行自己的yield, 不会影响托管之前的值。
* */
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}
let g = generator(10);
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());













