class User {
    constructor() {
        console.log('无参数');
    }
    show() {
        console.log('show');
    }
    // 会覆盖前面的
    show(a) {
        console.log('show a');
    }
}

let a = new User();
a.show()