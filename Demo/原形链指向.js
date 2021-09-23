function Person() {

}

let p = new Person();
console.log(p.__proto__.constructor === Person.prototype.constructor);
console.log(p.__proto__.constructor === Person);

console.log(p.__proto__.__proto__ === Object.prototype);
console.log(Object.prototype);

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(p))));
