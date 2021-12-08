// void仅仅用在函数的返回值上,没有返回值的函数返回值类型是void
function test():void {
    console.log(233);
}

let x: void = test();
console.log(x);

// 启用严格类型检查时,只有undefined算void类型
let v1: void = undefined;
// let v2: void = null;

function test2():void {
    return undefined;
}
