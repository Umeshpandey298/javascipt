// Primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =1000
const scorevalue=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=2323434353425234234345n

console.log(typeof(id)===typeof(anotherId))



// Reference (non primitive)


// Array, Object, Function

const heros=["shaktiman","naagaraj","doga"];

let myObj={
    name: "umesh",
    age: "21",

}

const myFuntion =function(){
    console.log("hello world")
}

console.log(typeof bigNumber);
// console.log(typeof myFuntion);
// console.log(typeof heros);
// console.log(typeof id);
// console.log(typeof myObj);
// console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) , Heap (Non Primitive)

let myYoutubename="Umesh pandey"

let anothername=myYoutubename
anothername="bobby pandey"

console.log(anothername)
console.log(myYoutubename)

let userone={
    email:"username@gmail.com",
    upi:"user@ybl"
}

let userTwo=userone

userTwo.email="umeshpandey@gmail.com"

console.log(userone.email)
console.log(userTwo.email)