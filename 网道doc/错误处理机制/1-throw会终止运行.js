/**
 * 在没有异常处理的情况下，throw会终止运行
 */
let x = 0;
while (true) {
    ++x;
    console.log(x);
    if (x === 100) {
        throw 'x = ' + x;
    }
}