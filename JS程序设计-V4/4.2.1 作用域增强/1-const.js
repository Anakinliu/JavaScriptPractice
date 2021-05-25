// let a = 2;
// const c = `1${a}1`;
// console.log(c);

    // 说明按值复制
function change(a) {
    a = Object();
}
const obj = Object();
obj.name='123';
change(obj);