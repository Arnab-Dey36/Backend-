//Create server in express
const express = require('express');

const app = express();

//Agar koii reply send karna chate ho and Handelling Routing
app.use("/about",(req,res)=>{
    res.send({"name":"Chayan","Age":22,"profession":"Engineer"});
})

app.use("/contact",(req,res)=>{
    res.send("I am your contact page!");
})

app.use("/detail",(req,res)=>{
    res.send("I am your Detail page !");
})

//Listen kar raha hai
app.listen(4000,()=>{
    console.log("Listen at Port 4000");
})