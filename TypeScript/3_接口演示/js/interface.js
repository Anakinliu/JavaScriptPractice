// 不会在编译后的JS文件中显示
function printPeople(p) {
    console.log('身高 ', p.height);
    console.log('体重', p.weight);
    console.log('生日', p.birth);
}
let person = {
    height: 123,
    weight: 60,
    birth: new Date,
};
printPeople(person);
