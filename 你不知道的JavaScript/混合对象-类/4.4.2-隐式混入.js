const something = {
    cool() {
        this.greeting = 'hello'
        this.count = this.count ? this.count + 1 : 1;
    }
}

something.cool();
console.log(something.greeting);
console.log(something.count);

const another = {
    cool() {
        // 隐式将something混入another
        something.cool.call(this);
    }
}

another.cool();  // 并非another的cool函数
//但是赋值导致在another上产生了属性，造成代码混乱
console.log(another.greeting);  
console.log(another.count);