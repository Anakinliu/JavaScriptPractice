let corp = {};  // 一个对象
corp.list = {};  // 缓存回调使用对象,因为要保存一个事件对应的key

// 订阅事件
corp.on = function (key, fn) {
    if (!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn); // 把fn放到回调列表中

}

// 发布事件
corp.emit = function (key, ...args) {
    // console.log('key: ', key, this.list[key]);
    if (this.list[key] && this.list[key].length) {
        this.list[key].forEach((fn) => {
            fn.apply(this, args);
        })
    }
}

corp.on('main', function (position, salary) {
    console.log('你的职位:', position);
    console.log('薪资:', salary);
})

corp.on('oth', function (skill, hobby) {
    console.log('你的技能:', skill);
    console.log('爱好:', hobby);
})

corp.emit('main', "前端", "1000")
corp.emit('main', "后端", "1000")
corp.emit('oth', "cs", "js")

