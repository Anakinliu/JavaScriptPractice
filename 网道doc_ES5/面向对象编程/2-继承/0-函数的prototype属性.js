function G() {
    this.name = 'giao';
}

let g1 = new G();
let g2 = new G();

// 只要修改原型对象，变动就立刻会体现在`所有实例对象`上。
G.prototype.age = 35;
// 当实例对象本身没有某个属性或方法的时候，它会主动到原型对象去寻找该属性或方法
console.log(g1.age);
console.log(g2.age);
// 但是，如果实例有了，就不会再去原形对象中去找
g1.age = 99;
console.log(g1.age);  // 99
console.log(g2.age);
console.log(G.prototype.age);

g2.walk = function() {
    console.log('walk........');
}
g2.walk();
// console.log(g1.walk());  // 报错 is not a function
// console.log(G.prototype.walk()); // 报错 is not a function

// console.log(g2.prototype);  // undefined

let p = g2.__proto__;
while (p) {
    console.log(p, typeof p);
    p = p.__proto__;
}