let event2 = {
    list: {},
    on(key, cb) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(cb);
    },
    emit() {
        // 拿到发布订阅对应的 key
        let key = Array.prototype.shift.call(arguments);

        let fns = this.list[key];

        if (!fns || !fns.length) {
            return false;
        }
        fns.forEach(fn => {
            fn.apply(this, arguments);
        })
    },
    remove(key, fn) {
        let fns = this.list[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            // 清空订阅事件
            this.list[key].length = 0;
        } else {
            this.list[key] = this.list[key].filter((e) => {
                return e !== fn;
            })
        }
    }


}
function cat() {
    console.log('一起喵喵喵');
}
function dog() {
    console.log('一起旺旺旺');
}

// 添加三个订阅者
event2.on('pet', data => {
    console.log('接收数据');
    console.log(data);
});

event2.on('pet', cat); 
event2.on('pet', dog);
// 取消dog方法的订阅
event2.remove('pet', dog);

// 发布消息
event2.emit('pet', ['二哈', '波斯猫']);

