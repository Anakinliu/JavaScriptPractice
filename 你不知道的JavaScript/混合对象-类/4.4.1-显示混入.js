// JS中不存在类
'use strict';
function mixin(sourceObj, targetObj) {
    for (let key in sourceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}

const Vehicle = {
    engines: 1,
    ignition() {
        console.log('Turning on my engine.');
    },
    drive() {
        this.ignition();
        console.log('Steering and moving forward!');
    }
}

const Car = mixin(Vehicle, {
    wheels: 4,
    drive() {
        // 由于存在标识符重叠（drive），这里使用《显示多态》，复制ignition函数的引用而已,Car对象中并没有Vehicle的drive方法
        Vehicle.drive.call(this);  
        console.log('rolling on all ' + this.wheels + ' wheels!');
    }
})
// 显示多态会使代码变复杂，尤其当使用显示多态实现多重继承时。


Car.drive();