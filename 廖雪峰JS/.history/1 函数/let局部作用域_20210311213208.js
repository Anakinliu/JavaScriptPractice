// 'use strict';
/*
**由于JavaScript的变量作用域实际上是函数内**部，我们在`for`循环等语句块中是无法定义具有局部作用域的变量的：

```
'use strict';

function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}
```
