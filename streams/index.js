const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on("request",(req, res)=>{

    // var fs = require("fs");
    // fs.readFile('streams.txt', (err, data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });

    const rstream = fs.createReadStream("streams.txt");

    rstream.pipe(res);
//     rstream.on('data',(chunkData)=>{
// console.log("readhing");
//         res.write(chunkData);

//     });

//     rstream.on('end', ()=>{
//         console.log("end");
//          res.end();
//     });

//     rstream.on('error', (err)=>{
// console.log(err);
//          res.end("File not found");
//     });
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port no 8000");
});