function Rabbit() { }


// 下面四个全true
console.log(Rabbit.prototype.constructor == Rabbit);
console.log(Rabbit.prototype.constructor.prototype == Rabbit.prototype);
console.log(Rabbit.prototype.constructor.prototype.constructor == Rabbit);
console.log(Rabbit.prototype.constructor.prototype.constructor.prototype == Rabbit.prototype);

console.log(Function.__proto__); // "[Function]"
console.log(Function.prototype); // "[Function]"
console.log(Function.constructor); // "[Function: Function]"
console.log(Function.prototype.constructor); // "[Function: Function]"
console.log(Function.prototype == Function.__proto__);  // true

console.log(Rabbit.__proto__); // "[Function]"
console.log(Rabbit.prototype); // "Rabbit {}"
console.log(Rabbit.constructor); // "[Function: Function]"
console.log(Rabbit.prototype.constructor); // "[Function: Rabbit]"这里注意
console.log(Rabbit.prototype == Rabbit.__proto__);  // false!!!这里注意

console.log(Function.prototype == Rabbit.__proto__);  // true
console.log(Rabbit.__proto__ == Function.constructor); // false
