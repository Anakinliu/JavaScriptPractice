console.log(1);
const getFakePerson = async () => {
    console.log(4);
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
    console.log(5);
};
console.log(2);
getFakePerson();
console.log(3);