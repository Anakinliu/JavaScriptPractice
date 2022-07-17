// 在ES5，你想重写对象实例的方法，又需要调用与它同名的原型方法，代码如下：
let person = {
    id: '#human',
    getGreeting() {
        return this.id + ' hello';
    }
}

let dog = {
    id: 'animal',
    getGreeting() {
        return this.id + ' baibai';
    }
}

// let friend = {
//     id: '#friend',
//     getGreeting() {
//         // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
//         // return Object.getPrototypeOf(this).getGreeting() + ", hi!";
//         return super.getGreeting() + ", hi!";
//     }
// }

// Object.setPrototypeOf(friend, person);
// console.log(friend.getGreeting());  // #friend hello, hi!
// console.log();

// super不能在非简写方法中使用
// let friend = {
//     id: '#friend',
//     getGreeting: function () {
//         // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
//         // return Object.getPrototypeOf(this).getGreeting() + ", hi!";
//         return super.getGreeting() + ", hi!";
//     }
// }

// Object.setPrototypeOf(friend, person);
// console.log(friend.getGreeting());  // #friend hello, hi!

// super对于多重继承很有用
// let friend = {
//     id: '#friend',
//     getGreeting() {
//         // ES5的方式在多重继承时会有问题，造成循环调用
//         console.log(this.id);
//         return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
//     }
// }

// Object.setPrototypeOf(friend, person);

// // relative原型是friend
// let relative = Object.create(friend);

// // console.log(person.getGreeting());
// // console.log(friend.getGreeting());
// console.log(relative.getGreeting());

// 使用super，以上问题迎刃而解，代码如下：

let friend = {
    id: '#friend',
    getGreeting() {
        // ES5的方式在多重继承时会有问题，造成循环调用
        console.log(this.id);
        return super.getGreeting() + ", hi!";
    }
}

Object.setPrototypeOf(friend, person);

// relative原型是friend
let relative = Object.create(friend);

// console.log(person.getGreeting());
// console.log(friend.getGreeting());
console.log(relative.getGreeting());