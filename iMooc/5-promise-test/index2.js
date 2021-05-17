/**
 * 用promise获取文件内容
 */
const fs = require("fs");
const path = require("path");

function tao1Ceng(fileName) {
  return new Promise(function (reslove, reject) {
    const fullFileName = path.resolve(__dirname, "files", fileName);
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      reslove(JSON.parse(data));
    });
  });
}

tao1Ceng('a.json').then(aData => {
    console.log(aData);
    return tao1Ceng(aData.next);
}).then(bData => {
    console.log(bData);
    return tao1Ceng(bData.next);
}).then(cData => {
    console.log(cData);
})
