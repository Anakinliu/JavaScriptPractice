/**
 * 
这就是说，如果数组遍历的目的是为了得到返回值，
那么使用`map`方法，
否则使用`forEach`方法。
 */

// map
/* 
var numbers = [1, 2, 3];

console.log(numbers.map(function (n) {
    return n + 1;
  })); 
// [2, 3, 4]

console.log(numbers);
// [1, 2, 3]

numbers.map(function (ele, idx, arr) {
    ele += 1;
    idx += 1;
    console.log(ele, idx, arr);
    return ele + 1;
  });
*/


// forEach无法被中断，
// 如果希望符合某种条件时，就中断遍历，要使用for循环。