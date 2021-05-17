/**
 * 不用 promise 的方式
 */
const fs = require('fs');
const path = require('path')

function tao1Ceng(fileName, callback) {
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data)=> {
        if (err) {
            console.error(err);
            return
        }
        callback(JSON.parse(data))
    })
}

function handleJSON(v) {
    console.log(v); // handle v
    tao1Ceng(v.data)
}
// 回调地狱
tao1Ceng('a.json', aJSON => {
    console.log(aJSON);
    tao1Ceng(aJSON.next, bJSON => {
        console.log(bJSON);
        tao1Ceng(bJSON.next, cJSON=> {
            console.log(cJSON);
        })
    })
})