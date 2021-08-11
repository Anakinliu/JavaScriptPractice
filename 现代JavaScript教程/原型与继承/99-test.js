// function tpl(s, arr) {
//     let re = /{{\$\d+}}/;
//     let re2 = /\d+/;
//     while (s.match(re) && s.match(re).length > 0) {
//         let toRe = s.match(re)[0];
//         let newStr = arr[parseInt(toRe.match(re2)[0])];
//         s = s.replace(re, newStr)
//     }
//     return s;
// }

// let dd = "<div>{{$0}},({{$1}})</div>";
// console.log(tql(dd, ["未来", "sss"]));


