function Super(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
}
Super.prototype.whoiam = function () {
  console.log("这里是 whoiam 方法!");
};

function Sub(value1, value2, value3) {
  Super.call(this, value1, value2);
  this.prop = value3;
}

/*
方法一，`Sub.prototype` 等于 Object.create(Super.prototype)
*/
Sub.prototype = Object.create(Super.prototype);
// Sub.prototype = Super.prototype;  //不要这么写，否则后面对`Sub.prototype`的操作，会连父类的原型`Super.prototype`一起修改掉。
Sub.prototype.constructor = Sub;
Sub.prototype.show = function () {
  console.log("这里是 show 方法.");
}; // 要在这里定义子类的方法

let son = new Sub(2, 4, "ppp");
son.show();
son.whoiam();

console.log(son instanceof Sub);
console.log(son instanceof Super);

console.log(son.value1, son.value2, son.prop);
new Sub().show();

/**
方法二 `Sub.prototype`等于一个父类实例。
子类会直接具有父类实例的方法。不推荐
 */

