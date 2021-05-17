/**
 * `this`的动态切换，固然为 JavaScript 创造了巨大的灵活性，但也使得编程变得困难和模糊。

有时，需要把`this`固定下来，避免出现意想不到的情况。
 */

//call
console.log("call:");
var dd = {};
function who() {
  return this;
}
console.log(who() === global);
console.log(who.call(dd) === dd);

// apply
console.log("apply:");
// 1. 最大值
let arr = [1, 3, 5];
console.log(Math.max.apply(null, arr));
// 2. 转换类似数组的对象
console.dir(Array);
console.log(Array.prototype);

// 3.bind
console.log("bind:");
dd.name = "弟弟";
dd.show = function () {
  console.log("这里是" + this.name);
};
let show = dd.show;
show();
show = dd.show.bind(dd);  //给show方法绑定this
show();
//绑定到其他对象
var zz = {};
zz.name = "垃圾";
show = dd.show.bind(zz);
show();
console.log();

// 4.bind结合回调函数
dd.changeName = function () {
  this.name = "系统";
};
function callIt(callback) {
  callback();
}
callIt(dd.show);

// 5.数组的forEach中的this
[22,33,44].forEach (
    function (n) {
        console.log(n, this === global);
    }
);

var obj = {
  name: "张三",
  times: [1, 2, 3],
  print: function () {
    // const that = this;
    this.times.forEach(function (n) {
        // console.log(n, that.name);
        console.log(n, this.name);
    });
  },
};

obj.print();

// 6.结合Function.prototype.call
console.log([1, 2, 3].slice(0, 1)); // [1]
// 等同于
console.log(Array.prototype.slice.call([1, 2, 3], 0, 1)); // [1]
