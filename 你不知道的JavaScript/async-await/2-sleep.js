
(async (time) => {
    console.log(1);
    await new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
    console.log(2);
})(3000);
