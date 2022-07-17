let person = {
    getGreeting() {
        return 'hello';
    }
}

let dog = {
    getGreeting() {
        return 'baibai';
    }
}

let friend = Object.create(person);

console.log(friend.getGreeting());  // hello
console.log(Object.getPrototypeOf(friend) === person);  //true

Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());  // baibai
console.log(Object.getPrototypeOf(friend) === dog);  //true