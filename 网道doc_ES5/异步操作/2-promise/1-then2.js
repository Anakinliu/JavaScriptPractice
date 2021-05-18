// Promise 新建后就会立即执行。
let promise = new Promise(function (resolve, reject) {
  console.log("Promise");
  resolve();
});
promise.then(function () {
  console.log("resolved.");  //当前脚本所有同步任务执行完才会执行
});
console.log("Hi!");

// Promise
// Hi!
// resolved
