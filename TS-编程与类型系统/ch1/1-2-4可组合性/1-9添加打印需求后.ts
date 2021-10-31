// 如果有很多个相同函数,忘记添加怎么办?
// 这两个函数,算法相同,只是数据类型不同和检查条件不同
// 我们可以使用泛型,同时,将检查条件抽象为一个函数即可
// 见1-10代码
function findFirstNegNum2(numbers: number[]): number | undefined {
    for (let i of numbers) {
        if (i < 0) {
            return i;
        }
    }
    console.log("无法找到任何结果");
    
}

function findFirstOneCharString2(strings: string[]): string | undefined {
    for (let str of strings) {
        if (str.length == 1) {
            return str;
        }
    }
    console.log("无法找到任何结果");

}