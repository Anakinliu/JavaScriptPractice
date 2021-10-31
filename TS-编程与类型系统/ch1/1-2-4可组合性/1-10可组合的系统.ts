// 如果有很多个相同函数,忘记添加怎么办?
// 这两个函数,算法相同,只是数据类型不同和检查条件不同
// 我们可以使用泛型,同时,将检查条件抽象为一个函数即可
// 见1-10代码
function findFirstEle<T>(arr: T[], p:(ele:T) => boolean):T|undefined{
    for (let e of arr) {
        if (p(e)) {
            return e
        }
    }
    console.log("无法找到任何结果");

}

let findFirstNegNum3 = (e:number) => e < 0;

let findFirstOneCharString3 = (e:string) => e.length == 0;

let arr1: string[] = ['www', 'w', 'ww'];
let arr2: number[] = [1, 2, 3, 4, -9];
console.log('find: ', findFirstEle(arr2, findFirstNegNum3));
