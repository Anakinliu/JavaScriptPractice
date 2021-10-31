// 如果有很多个相同函数,忘记添加怎么办?
// 这两个函数,算法相同,只是数据类型不同和检查条件不同
// 我们可以使用泛型,同时,将检查条件抽象为一个函数即可
// 见1-10代码
function findFirstEle(arr, p) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var e = arr_1[_i];
        if (p(e)) {
            return e;
        }
    }
    console.log("无法找到任何结果");
}
var findFirstNegNum3 = function (e) { return e < 0; };
var findFirstOneCharString3 = function (e) { return e.length == 0; };
var arr1 = ['www', 'w', 'ww'];
var arr2 = [1, 2, 3, 4, -9];
console.log('find: ', findFirstEle(arr2, findFirstNegNum3));
