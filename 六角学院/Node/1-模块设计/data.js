var xingming = "小米";
var mine = "看不到";

// 需要提供给外部 JS 的数据
// module.exports = {
//     d: xingming,
// };

// module.exports.e = "bark";

// 后面的 module.exports 会覆盖前面的
// module.exports = xingming;

// exports.e = 'HW';

// exports.f = 'XM';

var toExports = {};
module.exports = toExports;
toExports["d1"] = [1, 3, 5];
toExports["d2"] = "naive";
