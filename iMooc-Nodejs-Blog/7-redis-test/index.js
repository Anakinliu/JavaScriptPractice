const redis = require('redis');

const client = redis.createClient();

client.on("error", (err) => {
    console.log(err);
});

console.log('start');
let i = 0;

client.set(i, "game", redis.print);

client.get(i, redis.print);
// client.get("game", redis.print);


client.quit()

console.log('end 4');

