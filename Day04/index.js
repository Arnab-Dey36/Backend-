//Create Server
const http = require('http');

const server = http.createServer((req,res)=>{
    // res.end("Hello coder Army");
    if(req === "/"){
        res.end("Hello coder Army");
    }
    else if(req === "/contact"){
        res.end("This is a contact page");
    }
    else if(req === "/about"){
        res.end("This is a about page");
    }
    else{
        res.end("Error: Page not found  ");
    }
}); 

server.listen(4000,()=>{
    console.log("I am listen at port number 4000!");
})