let x = 0;
while (true) {
    ++x;
    console.log(x);
    if (x === 100) {
        try {
            console.log(x);
            throw new Error('这里出错了')
        } catch (e) {
            console.log(e.message);
            // console.log(e.stack);
            x += 1;
            try {
                if (x === 101) {
                    throw new Error('这里又出错了');
                }
            } catch (ee) {
                console.log(ee);
            }

        }finally {
            break;
        }
        
    }
}