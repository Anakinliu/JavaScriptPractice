var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    // 执行回调函数
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}

// 流程控制函数，控制异步操作
function series(item) {
  if (item) {
    async(item, function (result) {
      // callback 函数
      results.push(result);
      return series(items.shift());
    });
  } else {
    console.log(results);
    return final(results[results.length - 1]);
  }
}

series(items.shift());
