let c = {
    get age() {
        return 12
    }
}

console.log(c.age);
c.age = 99;
// age成了只读属性
console.log(c.age);