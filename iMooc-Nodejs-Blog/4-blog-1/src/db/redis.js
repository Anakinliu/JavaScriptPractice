const redis = require('redis');

const { REDIS_CONFIG } = require('../config/dbconfig');

const client = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host);

client.on("error", (err) => {
    console.log(err);
});

// set是同步执行的,但是redis.print是异步的,不过我们使用redis.print,所以这里不使用promise
function setKV(key, value) {
    // 如果不是基本类型,则转为字符串后再存储
    if (typeof value === Object) {
        value = JSON.stringify(value);
    }
    client.set(key, value, redis.print);
}

function getV(key) {
    return new Promise((reslove, reject) => {
        client.get(key, (err, val) => {
            if (err) {
                reject(err);
                return
            }
            // key没有查询到
            if (val === null) {
                resolve(null);
            }

            // 查询到了:
            try {
                // 查询到的结可能是个JSON化的对象的字符串
                resolve(JSON.parse(val));
            } catch(ex) {
                // 非经过JSON化的
                resolve(val);
            }
        })
    })
}

module.exports = {
    setKV,
    getV
}
