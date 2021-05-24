class Foo {
    static b() {
        this.a();
    }
    static a() {
        console.log('hello');
    }
    a() {
        console.log('world');
    }
}

Foo.b(); // hello
new Foo().a();
// 如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例。
// 静态方法可以与非静态方法重名。

// 父类的静态方法，可以向普通方法一样被子类继承。
class Goo extends Foo {

}
Goo.b();
new Goo().a();
