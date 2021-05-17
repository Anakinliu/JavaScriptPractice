function timeout(ms) {
  return new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(
      function () {
        console.log("in settimeout: ", arguments);
        return resolve;
      },
      ms,
      "done"
    );
  });
}

timeout(1000)
  .then(function (value) {
    console.log(value);
  });
console.log("开始");
