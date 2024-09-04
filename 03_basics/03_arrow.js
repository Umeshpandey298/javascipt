const user={
    username:"umesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username="bobby"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="umesh"
//     console.log(this.username)          // function ma this use nhi use ho rha hai 
                                            // this ka use object ma use hota hai
// }
// chai()



// const chai = function(){
//     let username="umesh"
//     console.log(this.username)          // function ma this use nhi use ho rha hai 
// }
// chai()


// const chai = ()=>{
//     let username="umesh"
//     console.log(this)          // function ma this use nhi use ho rha hai 
// }
// chai()


// const addTwo= (num1,num2) => {
//     return num1+num2                     // explicit return : when we use the return in arrow function 
// }


// const addTwo= (num1,num2) => num1+num2  // implecit return

const addTwo= (num1,num2) =>(num1+num2)

console.log(addTwo(3,87))

