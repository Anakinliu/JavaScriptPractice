const prototype1 = {age: 999};
const object1 = Object.create(prototype1);

// true
console.log(Object.getPrototypeOf(object1) === prototype1);