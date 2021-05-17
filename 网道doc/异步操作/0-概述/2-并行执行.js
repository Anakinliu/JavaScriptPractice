var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    // 执行回调函数
    callback(arg * 2);
  }, 1000);
  console.log(arg);
}

function final(value) {
  console.log("全部完成: ", value);
}

// 6个回调并行执行
items.forEach(function (item) {
  console.log('item: ', item);
  async(item, function (result) {
    results.push(result);
    if (results.length === items.length) {
      final(results[results.length - 1]);
    }
  });
});
