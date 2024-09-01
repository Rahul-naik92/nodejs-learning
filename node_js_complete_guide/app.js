// const lib = require('./lib.js')
// console.log(lib.sum(4,5))

const fs = require('fs')
//const txt = fs.readFileSync('demo.txt', 'utf-8')
// fs.readFile('demo.txt', 'utf-8', (err,txt)=>{
// console.log(txt)
// });

// fs.mkdir("Rahul-nodejs", { recursive: true }, (err) => {
//   if (err) throw err;
// });

//fs.writeFileSync("Rahul-nodejs/bio.txt", "Hey this is my first assignment and i want to lear backend!")

//fs.appendFileSync("Rahul-nodejs/bio.txt", "Techinical thapa amazing youbtube channel.")
// const buff_data = fs.readFileSync("Rahul-nodejs/bio.txt")
// console.log(buff_data)
// const org_data= buff_data.toString;
// console.log(org_data)
//fs.renameSync("Rahul-nodejs/bio.txt","Rahul-nodejs/bio_data.txt")
fs.rm("Rahul-nodejs/bio_data.txt")
//fs.rmdir("Rahul-nodejs")


// fs.writeFile("read.txt", "Today is awesome day, im learning Node JS", (err)=>{
// console.log("File is created")
// });

// const data=fs.readFileSync("read.txt", "utf-8");
// console.log(data)
// console.log("After the Data");

const data = fs.readFile("read.txt","utf-8", (err, data)=>{
console.log(data);
});
console.log("After the Data");