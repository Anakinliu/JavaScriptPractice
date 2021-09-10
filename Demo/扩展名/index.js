const obj = require('./abc')
console.log(obj);
// 可以匹配:
/**
1 ./abc.JSON  => 正常输出
2 ./abc.js  => 正常输出
3 ./abc  => 正常输出
4 ./abc/index.js  => 正常输出
5 ./abc/index/index.js  => 抛异常,无法找到
 */
