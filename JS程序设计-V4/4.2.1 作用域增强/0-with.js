
function s(a) {
    with(a) {
        console.log(prop);
        let b = 666;
        a.addon = '111';
    }
    console.log(a);
    // console.log(b);  ReferenceError
}

s({
    prop:'a obj'
})
