// 目标对象
const target = {
    id: '目标对象'
};
// 处理程序对象
const handler = {};

// 创建代理
const proxy = new Proxy(target, handler);

// id属性访问同一个值
console.log(target.id);
console.log(proxy.id);

// 给目标对象属性赋值也会反映在代理对象上
target.id = '修改的目标对象';
console.log(target.id);
console.log(proxy.id);

// 给代理对象赋值也会反映在目标对象上
proxy.id = '再次修改目标对象';
console.log(target.id);
console.log(proxy.id);

console.log(target.hasOwnProperty('id'));  // true
console.log(proxy.hasOwnProperty('id'));  // true

// 报错，TypeError
// console.log(proxy instanceof Proxy);

// false
console.log(proxy == target);
// false
console.log(proxy === target);