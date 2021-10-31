// 数组两种定义方式
// 方式1 数据类型[]
var arr = [1, 2, 3];
arr = [];
// 方式2 Array<数据类型>
var arr2 = ['2', '3', '4'];
// arr2 = arr;
arr2 = ['1', '2', '3'];
// 可以不加入任何元素初始化
var arr3 = [];
console.log(arr);
console.log(arr2);
// 元组类型,元素类型和个数是限定的
// 并且初始化时所有要初始化
var tuple = ['2', 'w', 2, new Date()];
console.log(tuple);
