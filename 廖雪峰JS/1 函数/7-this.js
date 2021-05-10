function getAge() {
    return 2021 - this.birth;
}
var birth = 1000;

var xiaoming = {
    birth : 1990,
    age : getAge,
}

var nest = xiaoming.age;


console.log(xiaoming.age());  //31
console.log(getAge());  //NaN
console.log(nest());  //NaN

console.log(getAge.apply(xiaoming, []));
console.log(getAge.apply(xiaoming, undefined));