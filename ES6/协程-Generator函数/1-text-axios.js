const axios = require('axios');

function* gen() {
    const url = 'https://api.github.com/users/github';
    yield axios.get(url);

}

let g = gen();
let res = g.next();  // res的是得到axios.get(url)返回值
console.log('res.done: ', res.done);
console.log('res.value: ', res.value);
console.log('等待...');
res.value.then((response) => {
    console.log('response1: ', response.data);
}, (error) => {
    console.log('error1: ', error);
})