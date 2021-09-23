function removeDep(arr) {
    arr = arr.filter((ele, idx, arr) => {
        return arr.indexOf(ele) === idx;
    })
    console.log(arr);
}
let a = [1, 2, 3, 4, 5, 2, 3, 4];
removeDep(a)

// ES6的set
function removeDep2(arr) {
    arr = [...new Set(arr)];
    console.log(arr);
}
let b = [1, 2, 3, 4, 5, 2, 3, 4];
removeDep2(b)
