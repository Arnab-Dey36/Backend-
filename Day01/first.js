//I need to use second.js file in my first.js file --- isiko common js module (cjs) bola jata hai


//for single import
const Sum = require("./second");
// for multiple import
const {Sum,Sub} = require("./second");

//"require" Statment likhne se second.js ke andar jo pura code hai wo first.js ke andar ajayaga ek
// function ke andar rap-up hoke aisa karke:->
//  (function(){
//     console.log("I am Second.Js File");

//     function Sum (a,b){
//         console.log(a+b);
//     }
//  })();  iea last me jo first bracket hai usse iea function pura call hota hai..

Sum(3,4);
Sub(8,9);
console.log("I am first.Js File");

