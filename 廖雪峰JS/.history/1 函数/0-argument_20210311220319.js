var myF = function (a,b,c=233) {
    console.log(arguments);
    console.log(arguments.length);
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};
myF(1,2,3,4);