let a = '😀';
let b = '国';
// match用来测试匹配单个字符的正则
console.log(/^.$/.test(a));  // false
console.log(/^.$/.test(b));  // true
console.log(/^.$/u.test(a));  // true
console.log(/^.$/u.test(b));  // true

function codePointLength(text) {
    let res = text.match(/[\s\S]/ug);
    console.log(res);
    return res ? res.length : 0;
}

console.log(codePointLength('abc'));