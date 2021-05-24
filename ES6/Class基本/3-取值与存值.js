class MyClass {
    constructor() {
        // ...
    }
    set pp(v) {
        console.log('setter: ' + v);
    }
    get pp() {
        return 'get pp';
    }
    get prop() {
        return 'get prop';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

let inst = new MyClass();

inst.prop = 123
inst.pp = '接收'

// 触发set的prop方法 setter: 123

console.log(inst.prop);
console.log(inst.pp);
// 触发get的prop方法'getter'

console.log('===ES5===');



// 同ES5，存值函数和取值函数是设置在属性的 Descriptor 对象上的。
class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
);

console.log("get" in descriptor);  // true
console.log("set" in descriptor);  // true