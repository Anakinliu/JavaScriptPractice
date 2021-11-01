// 断言不会在编译后的js中显现,只在ts编译阶段起作用
// ts编译器会相信你,x就是断言指定的类型
// 两种类型,尖括号或者as
function test(x: string | number) {
    // if (x.length) {
    //     console.log('string!!!');
    // }
    if ((x as string).length) {
        console.log('string!!!');
    }
    if (<number>x) {
        console.log('number!!!');
    }
}
test(123)
console.log();

test('abc')