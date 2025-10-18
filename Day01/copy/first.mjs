

// Agar Import- export Node.js ke saath use karna hai to .mjs extension 
//use karna hoga...aur nahi to package.json karke ek file banake uske andar
// "type":"module" mention kar dene se .mjs ki jayga pe .js seii ho jayaga
import Sum from "./second.mjs";

Sum(5,10);
console.log("Hello I am first.js file")