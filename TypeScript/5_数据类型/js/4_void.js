// void与any相反,表示没有任何类型,可以用来表示函数没有任何返回值
function gg() {
    console.log('Game Over');
}
console.log(gg());
var res = gg();
console.log(res);
// 将变量指定为void类型时,可以赋值undefined和null
var aa = null;
var bb = undefined;
