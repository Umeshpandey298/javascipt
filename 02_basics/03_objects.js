//singleton
// Object.create()

// object literals

const mySym =Symbol("key1")

const JsUser={
    name: "umesh",
    "full name": "umesh pandey",
    age: 18,
    // mySym: "mykey1", // its data type is string not symbol
    [mySym]: "mykey1",


    location: "haldwani",

    email: "umeshpandey11!@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email="adkfiw@gmail.com"
// Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello Js user")
}

JsUser.greeting2=function(){
    console.log(`hello Js user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

