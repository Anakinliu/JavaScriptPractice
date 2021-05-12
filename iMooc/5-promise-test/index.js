const fs = require('fs');
const path = require('path')

const fullFileName = path.resolve(__dirname, 'files', 'a.htm');
// 异步读取文件
fs.readFile(fullFileName, (err, data)=> {
    if (err) {
        console.error(err);
        return
    }
    console.log(data.toString());
    // console.log('DONE');
})
console.log('异步。。。。。。。。。');