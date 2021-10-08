async function dome() {
    console.log('我着急')
    await delay(3000)
    console.log('我也是')
    function delay(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('你等我一秒')
                resolve()
            }, num)
        })
    };
    for (let index = 0; index < 100; index++) {
        console.log(index)
        await delay(1000)

    }
}
dome()