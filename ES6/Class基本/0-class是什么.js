class AnimalClass {
    constructor(n) {
        this.name = n;
    }

    bark() {
        console.log('叫');
    }
}

function AnimalFunc(n) {
    this.name = n;
}

AnimalFunc.prototype.bark = function() {
    console.log('叫');
}

let dog1 = new AnimalClass('狗');
console.log(dog1);
console.log('typeof Animal: ', typeof AnimalClass);  //类的数据类型就是函数
console.log('typeof dog: ', typeof dog1);
// 类本身就指向构造函数
console.log(AnimalClass === AnimalClass.prototype.constructor);
// 类的所有方法都定义在类的 prototype 属性上面。
AnimalClass.prototype.bark();  
// 在类的实例上面调用方法，其实就是调用原型上的方法。
console.log(dog1.constructor === AnimalClass.prototype.constructor);
// 可以直接修改类的原形以添加方法
console.log('======');
// 输出完全一样
let dog2 = new AnimalFunc('狗');
console.log(dog2);
console.log('typeof Animal: ', typeof AnimalFunc);  //function
console.log('typeof dog: ', typeof dog2);
console.log(AnimalFunc === AnimalFunc.prototype.constructor);
AnimalFunc.prototype.bark();  
console.log(dog2.constructor === AnimalFunc.prototype.constructor);


