function myNew(constructor, ...args) {
    let obj = Object.create(constructor.prototype);
    // 给obj赋值
    let res = constructor.call(obj, ...args);
    // 如果构造函数的返回值是对象或者函数,就返回这个值
    if (res && (typeof res === 'object' || typeof res === "function")) {
        return res;
    }
    return obj;
}

function Human() {
    this.nick = "HHH";
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = Object.create(Human.prototype);

Person.prototype.say = function () {
    console.log(this.age);
};


// let p1 = myNew(Person, "lihua", 18);
// console.log(p1.name);
// console.log(p1);
// p1.say();

let p1 = new Person("lihua", 18);
for (let e in p1) {
    console.log(e);
}

console.log(p1 instanceof Human);
console.log(Object.keys(p1));  
// console.log(p1.name);
// console.log(p1);
// p1.say();
