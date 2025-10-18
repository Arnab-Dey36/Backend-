console.log("I am Second.Js File");

function Sum (a,b){
    console.log(a+b);
}

function Sub (a,b){
    console.log(a-b);
}

// Single function ko export karana hai to aise karo 
// module.exports = Sum;

//aur multiple ko export karana hai to object ki use karlo 
module.exports = {Sum,Sub}