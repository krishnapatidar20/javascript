// Immediately Invoked Function Expressions (IIFE)


(function one (){
    // named iife
    console.log(`DB CONNECTED `);
})();

(  (name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
}) ('krishna')