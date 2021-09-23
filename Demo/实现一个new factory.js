function objectFactory() {
    let newObject = null;
    // 弹出arguments第一个元素
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断第一个参数是否是函数
    if (typeof constructor !== 'function') {
        console.log('type error!');
        return
    }
    // 新建一个空对象,对象的原型为构造函数的prototype对象
    newObject = Object.create(constructor.prototype);
    // 将this指向新建对象,执行函数,result是构造函数的返回值
    result = constructor.apply(newObject, arguments);
    // 判断构造函数的返回值是对象(函数)还是其他值
    let flag = result && (typeof result === 'object' || typeof result === 'function');
    // flag为true表示result是引用类型
    return flag ? result : newObject;
}

function D() {
    this.age = 777;
    return 2;
}
let d = objectFactory(D, 0)
console.log(d);
console.log(d.age);