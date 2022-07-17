// assign不能复制访问器属性
let supplier = {
    age: 18,
}
Object.defineProperty(supplier, 'year', {
    get() {
        console.log('调用了get');
        return this.age;
    },
    set(value) {
        console.log('set被调用了');
        this.age = value;
    },
    enumerable: true
})

supplier.year = 2022;

console.log(supplier.age);
console.log(supplier.year);


let myObj = {};
Object.assign(myObj, supplier);

console.log('new: ');
console.log(myObj.age);
console.log(myObj.year);

myObj.year = 2021;

// age没有变，说明assign没有复制访问器属性（getter和setter）
console.log(myObj.age);
console.log(myObj.year);


// 同名属性覆盖
let a = {};
Object.assign(a, {
    age: 18,
},
    {
        age: 20,
    });
console.log(a);
