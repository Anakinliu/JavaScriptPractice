var myF = function (a,b) {
    console.log()
    console.log(arguments.length);
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};
myF(1,2,3,4);