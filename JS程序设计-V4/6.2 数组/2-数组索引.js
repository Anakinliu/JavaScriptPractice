let arr = [1,3,4,5];
// 减小长度后, 后面的元素被删除
arr.length = 2;

console.log(arr[3]); // undefined

arr.forEach(ele => {
    console.log(ele);  // 1 3
})

console.log(arr.map((e) => e+100)); // [101, 103]

console.log(arr.reduce((a,b) => {
    return a+b;
}));  // 4