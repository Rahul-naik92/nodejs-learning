
const bioData = {
    name:"Rahul",
    age:26,
    channel:"Subscribe"
}

const jsonData = JSON.stringify(bioData);

console.log(jsonData)

const objData = JSON.parse(jsonData);
console.log(objData)