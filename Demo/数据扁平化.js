function flat(arr) {
    let res = [];
    function rev(arr) {
        for (let e of arr) {
            // if (e instanceof Array) {
            if (Array.isArray(e)) {
                rev(e)
            } else {
                res.push(e);
            }
        }
    }
    rev(arr)
    console.log(res);
}

let a = [1, 2, 3, [4, 5], [6, 7], [8, 9], [10, 11, [11.2, 11.4, 11.6, 11.8], 12]];
flat(a)