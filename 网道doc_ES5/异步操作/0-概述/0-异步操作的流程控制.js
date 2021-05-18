function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    // 执行回调函数
    callback(arg * 2);
  }, 1000);
  console.log("Done");
}

let f = function (j) {
  return console.log("完成" + j);
};

//难以阅读
async(1, function (value) {
  async(2, function (value) {
    async(3, function (value) {
      async(4, function (value) {
        async(5, function (value) {
          async(6, f);
        });
      });
    });
  });
});
// 下面分为：串行，并行
