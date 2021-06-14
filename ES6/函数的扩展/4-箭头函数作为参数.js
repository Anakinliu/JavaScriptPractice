const obj = {
    n: "CS",
    each(fn) {
        for (let ele=0; ele < 3; ele++) {
            fn(ele, this.n);
        }
    }
}

obj.each((ele, n) => {
    console.log(ele, n);
});
