function doResolve(fn) {

    let done = false;
    fn(function (value) {
        if (done) return
        done = true
        console.log("执行了1");
    }, function (reason) {
        if (done) return
        done = true
        console.log("执行了2");
    })

}
doResolve(function(a, b) {
    a(123);
})