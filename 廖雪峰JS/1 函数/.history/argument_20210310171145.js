var myF = function (a,b) {
    console.log(arguments.length);
    for (var i=0; i < arguments.length; i++) {
        console.log();
    }
};
myF(1,2,3,4);