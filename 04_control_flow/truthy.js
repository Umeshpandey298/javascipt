const userEmail=[]
if(userEmail){
    console.log("got the user email");
    
}else{
    console.log("dont have user email");
    
}


// false values

// false,0,-0,BigInt,On,"",null,undefined,NaN

// ture values

// true,"0",'false'," ",[],{}, function(){},


// if (userEmail.length===0){
//     console.log("array is empty");
    
// }
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}

// nullish coalescing operator(??): null underfiend

let val1;
val1=5??10
val1 = null??10
val1=undefined??15

console.log(val1);

// terniary operator

// conditon ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less then 80") : console.log("more then 80");



















