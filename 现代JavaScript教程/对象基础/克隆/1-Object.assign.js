let a = {
    age: 99,
    likes: ["game", "book"],
    action: function () {
        console.log(this.likes);
    },
}

let b = {
    age: 9999,
    link2: a,
}
a["link1"] = b;

a.action();

let copy = Object.assign({}, a, b);

console.log(copy);  //循环引用可以正常复制, 不会报错

copy.action();

console.log(copy.action === a.action);  // true
console.log(copy.likes === a.likes);  // true