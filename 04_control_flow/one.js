// if


// const isUserloggedin=true
// const temp=41;


// if(temp<50){
//     console.log("less then 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// <,> ,<=,>=,==,!=,===,!==


// const score =200
// if (score>100){
//     var power="fly"
//     console.log(`user power :${power}`);
    
// }
// console.log(`user power :${power}`);

// const balance =1000
// if(balance>500) console.log("test"),console.log("test2");

// nesting in if else condition statement
// if (balance<500){
//     console.log("less then 500");
// }else if(balance<750){
//     console.log("less then 750");
// }else if (balance<900){
//     console.log("less then 900")
// }

// else {
//     console.log("less then 1200");
    
// }

const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if(userloggedin&&debitcard&&2==3){
    console.log("Allow to buy course");
}

if (loggedinfromgoogle||loggedinfromemail){
    console.log("user logged in");   
}
