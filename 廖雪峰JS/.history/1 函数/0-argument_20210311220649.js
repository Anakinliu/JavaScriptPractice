var myF = function (a,b) {
    console.log(arguments);
    console.log(arguments.length);
    console.log();
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    
};
myF('1,2,3,4');

function gjzcs(a=1,b=2,c) {
    console.log(a,b,c);
}
gjzcs();
gjzcs(2,3)

