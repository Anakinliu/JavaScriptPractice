/**
 * Object本身的方法
 */
/**
Object.ppp = function() {
    console.log('in ppp...........');
}
Object.ppp();
var obj = new Object();
obj.ppp();  //无法调用
 */

Object.prototype.ppp = function() {
    console.log("in pppppppppppppppppppppppppppp");
}

console.dir(Object.__proto__ === Function.prototype);
console.dir(Object.__proto__.__proto__ === Object.prototype);

Object.__proto__.__proto__.ppp();

Object.ppp(); // ok

var obj = new Object();
obj.ppp(); // ok



