var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}

function launcher() {
  while (running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function (result) {
      results.push(result);
      running--; //异步操作内修改
      if (items.length > 0) {
        launcher(); //异步操作内再次调用启动代码以启动异步任务
      } else if (running == 0) {
        final(results); // 所有异步任务执行完就结束了
      }
    });
    running++;
  }
}

launcher();
