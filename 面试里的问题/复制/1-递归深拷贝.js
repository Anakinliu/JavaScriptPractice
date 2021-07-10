// V2
// 函数执行的是浅复制
function cloneDeep(obj) {
  // 维护的 引用数组
  let visitedObjs = [];
  function baseClone(target) {

    // 非 对象直接返回,注意函数的typeof返回的是function
    if (!(typeof target === 'object')) return target

    // 遍历寻找 相同引用
    for (let i = 0; i < visitedObjs.length; i++) {
      if (visitedObjs[i].target === target) {
        return visitedObjs[i].result;
      }
    }

    let result = Array.isArray(target) ? [] : {}

    // 添加到引用list里
    visitedObjs.push({ target, result })

    const keys = Object.keys(target);
    for (let i = 0, len = keys.length; i < len; i++) {
      result[keys[i]] = baseClone(target[keys[i]])
    }
    return result
  }
  return baseClone(obj);
}

const a = {
  'age': 99,
  'call': function () {
    console.log('this is call');
  },
  'thing': [1, 2, 3]
}

const copyOfA = cloneDeep(a);

a.call.gg = '666';
const func = a.call;
func();
console.log(func.gg);

console.log(copyOfA.call.gg);