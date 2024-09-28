
const fs = require("fs")
const bioData = {
    name:"Rahul",
    age:26,
    channel:"Subscribe"
}

// const jsonData = JSON.stringify(bioData);

// console.log(jsonData)

// const objData = JSON.parse(jsonData);
// console.log(objData)

//convert to JSON
//add JSON file to text file.
//readfile that is created/
//Again convert back to json object 
//print it

const jsonData = JSON.stringify(bioData)
fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("File is created and upated. ")
});

fs.readFile("json1.json", "utf-8", (err, data)=> {
 console.log(data)
 const orgData=JSON.parse(data);
 console.log(orgData)
});