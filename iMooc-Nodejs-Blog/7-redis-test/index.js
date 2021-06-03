const redis = require('redis');

const client = redis.createClient();

client.on("error", (err) => {
    console.log(err);
});

console.log('1');
let i = 0;
while (i < 10) {
    client.set(i, i, redis.print);
    console.log('insert');
    i += 1;
}
console.log('2');
client.get("game", redis.print);
console.log('3');
client.quit()
console.log('4');

