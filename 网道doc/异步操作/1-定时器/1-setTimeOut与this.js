var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  },
};

// 不能正确地找到this：
setTimeout(obj.y, 1000) // undefined

// 解决方法一，使用bind
setTimeout(obj.y.bind(obj), 1000); // 2

// 解决方法二：再套一个函数，函数内执行y方法
setTimeout(function() {
    obj.y();
},1000); // 2