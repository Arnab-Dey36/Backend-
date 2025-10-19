
<!--Difference Between CJS Module & ES Module(MJS)--!>
1) CJS-Older way hai,lekin abhi bhi industry mein follow hota hai. Aur ES module-Newer way hai.
2) CJS mein "require","module.exports" ki used hota hai, aur ES-module mein "import & export" ki use hota hai.
3)CJS- Synchornous type ki hota hai, Aur ES module-Asynchornous type ki hota hai.
4)CJS-Non Strict mode mein chalta hai, aur ES module-Strict mode mein chalta hai.



Synchornous ki matlab hai user agar multiple "require" statement use kar raha hai ,then phele "first require" statment execute hoga then "second require" statement, then "third require",then "fourth require" statement aisa karke execute hoga. Jab tak ek pura execute na ho raha hai tab tak 'second require' statement execute nahi hoga...


Asynchornous ki matlab hai user agar multiple import statement use kar raha hai then phele 'first import statement' execute hoga agar 'first import statement' execute hone mein time lag raha hai to wo 'second import statement' execute karne lag jayaga first ke liya wait nahi karega...

agar ek folder ke andar multiple opearation (function)execute ho raha hai aur usko main file main use karna hai to usko ek ek karke 'require' keyword ki help se import karane se achha:- aisa karke:
// const Sum = require("./Current/Sum");
// const Sub = require("./Current/Sub");
// const Mul = require("./Current/Mul");

usi folder ke andar(jis folder ke andar operation define kiya hai) aur ek file banake ussme sare operation(function)ko 'require' keyword ki help se import karke:-aisa karke(current folder ke andar index.js file ke andar):
//const Sum = require("./Sum")
//const Sub = require("./Sub")
//const Mul = require("./Mul")
//module.exports = {Sum,Sub,Mul};

usko main file direct ekbar mein import karalo:aisa karke:
//const {Sum,Sub,Mul} = require("./Current");


iea pe hum dekh raha hai ki folder ka name(Current) likhne sei wo sare file ko import kara de raha hai main file(first.js) ke andar kyunki 'Node.js' ke andar ek rules hota hai, folder ke andar agar file ka name mentiond nahi karoge to wo by default 'index.js' file koii le leta hai. Agar 'index.js' file ka name change karke koii aur name rakh deta ho to uss time folder ke sath sath file ka bhi name dena hoga,iea bass tum jab file ka name 'index.js' rakhoge tab hi applicable hai...


Single Core Processor:- iska simple sa matlab hai Ekbar mein ek hi process(task) execute hoga.But We see that Single processor multiple processes ko ek saath (concurrently) run karata hai, matlab user single processor ke andar youtube chala raha hai, Game khel raha hai , insta bhi chala raha,balki single processor ke andar ek hi process execute hota hai,But iea pe iea sab ho raha hai Context Switching ki Help se..


Context Switching:- iska matlab hota hai jab ek CPU ek process (ya thread) se dusre process me switch karta hai, to wo phele wala process ka state (context) save karta hai aur naye process ka state load karta hai.Jab dubara phele wala process mein ata hai tab wo jaha save kiya tha uha se start hota hai.Isse lagta hai jaise ek single processor ek hi time me multiple work (process) kar raha hai...



Dual Core Processor: Iska Matlab ek samay me do alag tasks parallel me execute ho sakte hain. User agar do se jada task kare then wo task two processor ke andar devide ho jayaga then uske beach switching context apply hoga. For example, user 1)Youtube chala raha hai 2) gameing kar raha hai 3) VS code chala raha hai 4)Insta dekh raha hai, dual core processor ke andar isme se koii bhi do task ek processor ke andar and aur do task dusre processor ke andar chala jayaga,then uske beaach Context Switching ki consept apply hoga.... And same concept applicable for Octa core Processor.....



Ek 20gb ka game 8gb ram ke andar kaise chal jata hai?--->game ka har ek part(ex:UI etc.) ke liya alag alag se code likha jata hai,lekin game ko chalane ke liya jitna code lage ga utna code 8GB ram ke andar ata hai aur baki sara code fake deta hai nahi leta hai,isiliye 8GB ram ke andar bhi 20GB ka game bhi chalta hai--aur iss concept koii "virtual memory"(jitna code chaiya game ko chalane ke liya utna code ko leke aya aur baki code fake dijiya) bola jata hai........



Process ka matlab kisi ek task ko execute karana.Ek process ke andar multiple threads ho sakte hain,jo same memory space share karte hain,aur different tasks ko ek saath perform karte hain. 

Thread process ka ek subset hota hai.Threads ka matlab hai it is smallest uints of task, jo aap complete kar sakte hai.
Example:
Socho tumhara ek program hai — Music Player App 🎵
Uske andar:
Ek thread music play kar raha hai 🎧
Dusra thread volume control handle kar raha hai 🔊
Teesra thread song list load kar raha hai 🎶
👉 Ye sab ek hi program me chal rahe hain — par alag-alag threads me.



Multi Threaded ki Jarurat Kyun padi?-->Multi-threading me ek process ke andar multiple threads parallel chal sakte hain. Ek process ke andar bhi multiple task execute ho saakta hai jaise ki i) File download kar raha hai ii)File display kar raha hai iii)User input le raha hai, multiple thread hone se ek ek task ek ek thread ko chala jata hai aise karke-
                Thread 1 → File download kar raha hai
                Thread 2 → File display kar raha hai
                Thread 3 → User input le raha hai
Saare threads ek saath parallel kaam karte hain — isliye performance aur responsiveness badh jaata hai.



agar humare website Synchornous type ki hoti tab kya problem/ Difficulties face karna hota:-
Synchronous ka matlab Jab tak ek task complete nahi hota, tab tak agla task start nahi hota.iske wajase:-
1️⃣ Website Slow Lagti Hai (Blocking Behavior)

i)Agar ek operation (like API call, image load) slow hai,to poori website wait karti hai uske complete hone ka.User ko lagega website hang ho gayi.
2️⃣ User Experience Poor Ho Jaata Hai
3️⃣ Performance Down

🧩 Real Life Analogy:
Socho tum ek restaurant me gaye 🍽️
Wahaan sirf ek cook hai, aur wo ek time me sirf ek dish banata hai.
Jab tak ek order complete nahi hota, doosra start nahi hota.
👉 Customers wait karte rehte hain 😩
Same situation synchronous website me hoti hai!