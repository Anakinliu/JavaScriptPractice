let bh = setTimeout(function() {
    console.log('执行完了');
}, 1000);
console.log(bh);
setTimeout(function() {
    console.log('开始执行');
});  // 默认参数 是 0

// 允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。
setTimeout(function(a,b) {
    console.log(arguments);
    console.log('岁数： ', a,b);
}, 2000, 19, 29);