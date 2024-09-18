const user={
    username:"umesh",
    loginCount:10,
    signedIn:"true",

    getUserDetails:function(){
        // console.log("got user detail from database");
        // console.log(`username: ${username}`);
        // console.log(this.username)
        // console.log(this)   // here the this is used to print the current contest of the that slope 
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) // global ma this ki value change hote rhti hai

// const promiseOne=new Promise()
// const date=new Date()                // here the new keyword is used to create the contast , and this is called the constructor function


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }

    // return this

}
const userOne= new User("umesh",12,true)
const userTwo=new User("Bobby",333,false)
console.log(userOne.constructor);
// console.log(userTwo);


/*
   some line about the new keyword

   step 1 : new object is created
   step 2 : called the construct function due to new keyword (packed all arrument function on this give to you)
   step 3 : this keywors are injected on that argument
   
*/ 








