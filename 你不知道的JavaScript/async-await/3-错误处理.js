async function f() {
    try {
        let resp = await fetch('http://kouder.cn');
        let user = await resp.json();
    } catch (err) {
        console.log('出错了: ', err);
    }
}
f()