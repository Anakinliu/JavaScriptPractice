const a = {
    set age(v) {
        console.log('set....');
        this._age_ = v;
    },
    get age() {
        return this._age_;
    }
}

a.age = 22;

const b = Object.create(a);

console.log(b.hasOwnProperty('age'));  // false

b.age = 32;  // 会调用父的setter

// 屏蔽属性
console.log(b.hasOwnProperty('age'));  // false

console.log(b.age);  // 这里还是a的age属性
console.log(a.age);

Object.defineProperty(b, 'age', {
    value: 12
})

console.log(b.hasOwnProperty('age'));  // TRUE
