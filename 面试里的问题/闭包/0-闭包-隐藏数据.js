// 隐藏数据
function cacheStore() {
    const data = {};
    return {
        setData: function(k, v) {
            data[k] = v;
        },
        getData: function(k) {
            return data[k];
        }
    }
}

const a = cacheStore();
a.setData('id', 999);
console.log(a.getData('id'));