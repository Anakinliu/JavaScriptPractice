// 多层this
// 可以使用严格模式，禁止this指向全局对象

var o = {
    f1: function () {
      console.log(this);
      console.log("====");
      var f2 = function () {
        'use strict'
        console.log(this);  // undefined 'in strict'
      };
      f2();
    }
  }
  
  o.f1();