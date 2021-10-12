let corp = {};  // 一个对象
corp.list = [];  // 缓存回调的列表

// 订阅事件
corp.on = function (fn) {
    this.list.push(fn); // 把fn放到回调列表中
}

// 发布事件
corp.emit = function () {
    // 当发布的时候再把列表里保存的回调函数依次执行
    this.list.forEach(callback => {
        callback.apply(this, arguments);
    })
}

corp.on(function (position, salary) {
    console.log('你的职位:', position);
    console.log('薪资:', salary);
})
corp.on(function (skill, hobby) {
    console.log('你的技能:', skill);
    console.log('爱好:', hobby);
})

corp.emit("前端", "1000")
// corp.emit("cs", "js")

