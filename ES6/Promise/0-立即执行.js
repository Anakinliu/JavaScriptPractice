console.log("start.....");

new Promise((resolve, reject) => {
    console.log("233");
    setTimeout(function() {
        console.log('setTimeOut...');
    }, 2000);
})

console.log("end");