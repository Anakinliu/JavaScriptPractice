import {
    a,
    arr,
    f
} from './a.js'

import {tool} from './a.js'

// 导入default的export时不能加括号
import whatthefuck from './d-export-default.js'

import proClass from './a.js'

console.log(a);
console.log(arr);
f();
tool();

whatthefuck();

new proClass('叫兽').bark();