class Order {
    static show() {
        // true
        console.log(this === Order);
    }
}

Order.show();

// 这实际上跟直接将其作为属性赋值的作用相同
class Order2 {}

Order2.show = function() {
    console.log(this === Order2);
}
Order2.show();
