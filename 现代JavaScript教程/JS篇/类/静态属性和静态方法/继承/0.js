class Animal {
    static compare(animal1, animal2) {
        return animal1.age - animal2.age;
    }
    static livePlant = '地球'
    constructor(age) {
        this.age = age
    }
    live = true
    show() {

    }
}
class Human extends Animal {
    constructor(age) {
        super(age);
    }
}

let hs = [
    new Human(19),
    new Human(-9),
    new Human(0),
]
// console.log(typeof (Animal));  // function
console.log(Object.keys(Animal));  // [ 'livePlant' ]
console.log(Animal.hasOwnProperty('compare'));  // true
console.log(Animal.hasOwnProperty('livePlant'));  // true
console.log(Animal.hasOwnProperty('live'));  // false
console.log(Animal.hasOwnProperty('show'));  // false
console.log(Animal.prototype.hasOwnProperty('show'));  // true
console.log(Animal.prototype.hasOwnProperty('show'));  // true

console.log('--------------------');
let h = new Human(2);
console.log(h.hasOwnProperty('constructor'));  // false


console.log(Human.livePlant);  // 地球
Human.livePlant = "太阳";  // 直接给Human新增了属性
console.log(Human.livePlant);  // 所以这一输出"太阳"
console.log(Animal.livePlant);  // 所以父类的没被修改"地球"
hs.sort(Human.compare);
console.log(hs);

console.log(Animal === Human.__proto__);
console.log(Animal.prototype === Human.prototype.__proto__);
