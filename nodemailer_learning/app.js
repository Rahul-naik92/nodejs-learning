
const express = require("express")

const app = express();

app.get("/", (req, res)=>{

    res.send("Im a server booss!!")

});

app.get("/sendEmail", sendEmail);

const start = async ()=>{
    try{
app.listen(5000, ()=>{
    console.log("I m live on port 500");
});
    } catch(error){

    }
};

start();