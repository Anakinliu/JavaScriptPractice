// 箭头函数的 this　总是指向上层作用域的this
// 箭头函数的 this　在函数定义生效时已经确定
// 1
// 字面量对象中的箭头函数

const shape = {
    radius: 10,
    diameter() {
        console.log('2 *　this.radius : ', this.radius * 2); 
    },
    perimeter: () => {console.log('this.radius : ', this.radius);}
}

shape.diameter();
shape.perimeter();  // 上层作用域 没有 this

// 2
// const Dog = function(props) {
//     this.props = props;
//     this.fn = () => {
//         console.log(this.props);  // 上层作用域 有 this
//     }
// }

// let d1 = new Dog({a:1,b:'two'});  
// d1.fn();  // { a: 1, b: 'two' }

// 3 在继承中,箭头函数的 this 也会沿着原形链查找
// const Human = function (props) {
//     this.props = props;
//     this.fn = () => {
//         console.log(this.props);
//     }
// }

// const Dog = function(props, name) {
//     Human.call(this, props);
//     this.name = name;
//     this.show = () => {
//         console.log('this.props : ', this.props);
//     }
// }

// // console.dir(Human.prototype);

// Dog.prototype = Object.create(Human.prototype);
// Dog.prototype.constructor = Dog;

// let d1 = new Dog({a:1,b:'two'}, '一条狗');
// d1.show();  


// 4
// function foo() {
//     setTimeout(() => {
//         console.log('id:', this.id);
//     }, 100);
// }

// var id = 21;

// foo.call({ id: 42 });
  // id: 42



