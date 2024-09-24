//the http.createServer() method includes request and response parameter which is supplied by Node.Js.
//The request object can be used to get information about the current HTTP request.

//e.g, url, reqquest header, and data. 

//the response object can be used to send a response for a current HTTP request.

//if the response from the HTTP server is supposed to be displyed as HTML

//you should include an HTTP header with the correct contenet type:


const http = require('http');

const server = http.createServer((req, res)=>{
res.end("Hello from other side rahul.");


});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port no 8000");
});
