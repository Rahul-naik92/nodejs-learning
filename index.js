
const fs = require('fs')

//Create Folder
//create a file in it names bio.txt and data into it.
//Add more data into the file at the end of the existing data.
//Read the data without getting the buffer data at first file encoding.
//Rename the file name to mybio.txt
//now delete both the fiele and the folder

// fs.mkdir("Rahul-Async", (err, data)=>{
//     console.log("Folder is created");

// });
// fs.writeFile("Rahul-Async/bio.txt", "Hey, this is learning on Async", (err, data)=>{
//     console.log("File is created and data is written");
// });

// fs.appendFile("Rahul-Async/bio.txt", "New Data is updated", (err, data)=>{
//     console.log("Data is appended");
// });

// const latestData=fs.readFile("Rahul-Async/bio.txt", "utf-8", (err, data)=>{
//     console.log(data);
// });
// console.log(latestData);
// fs.rename("Rahul-Async/bio.txt", "Rahul-Async/my_bio.txt", (err, data)=>{
//     console.log("Renamed");
// })

fs.rm("Rahul-Async/my_bio.txt",  (err, data)=>{
    console.log("Removed");
})