// 1
// 不适合: 定义对象的方法，且该方法内部包括this。

const cat = {
    lives: 9,
    jumps: () => {
        --this.lives;  //this指向全局对象
    }
}
cat.jumps();
console.log(cat.lives);  // 9

// 因此, 对象的属性建议使用传统的写法定义，不要用箭头函数定义。

// 2
// 不适合: 需要动态this的时候