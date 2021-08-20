// 监视对象
function observe(obj) {
    // 遍历对象，使用 get/set 重新定义对象的每个属性值
    Object.keys(obj).map(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, k, v) {
    // 递归子属性
    if (typeof (v) === 'object') observe(v)

    // 重定义 get/set

    Object.defineProperty(obj, k, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get k: ', k);
            console.log('get: ' + v)
            return v
        },
        // 重新设置值时，触发收集器的通知机制
        set: function reactiveSetter(newV) {
            console.log('set k: ', k);
            console.log('set: ' + newV)
            v = newV
        },
    })
}

let data = [1, 2, 3]
// 监视对象
observe(data)
// data[1] = 4;
data.shift();
// data.push(5)
data.length = 1;
