let event2 = {
    list: {},
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    emit() {
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

event2.on('pet', data => {
    console.log('接收数据');
    console.log(data);
});
event2.on('pet', cat); 
event2.on('pet', dog);
// 取消dog方法的订阅
event2.remove('pet', dog);
// 发布
event2.emit('pet', ['二哈', '波斯猫']);

