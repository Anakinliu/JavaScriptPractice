setInterval(function () {
  console.log(2);
}, 1000);  //虽然是每隔 1s 执行一次，但是 sleep 要先运行 3s
// 生效后setInterval不会产生累积效应，即不会一下子输出三个 2，而是只会输出一个 2。

sleep(3000);

function sleep(ms) {
  var start = Date.now();
  while (Date.now() - start < ms) {
      console.log('sleeping...');
  }
}
