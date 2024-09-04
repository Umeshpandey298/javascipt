//  Immediately invoked function expressions (IIFE)


// iife ko semicolum se end karna jaruri hota hai

(function chai(){                                   // named iife
    console.log(`DB CONNECTED`)
})();


( (name)=>{                                              // simple iife
    console.log(`DB CONNECTED two`)
})("umesh");

