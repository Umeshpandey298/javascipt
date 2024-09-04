function sayMyName(){
    console.log("u")
    console.log("m")
    console.log("e")
    console.log("s")
    console.log("h")
}

// sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }


// function addTwoNumber(number1,number2){
//     // let result= number1+number2
//     // return result

//     return number1+number2
// }
// const result =addTwoNumber(3,32)
// console.log("Result:", result);




// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())




function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("please enter the username");
    //     return
        
    // }
    if(!username){
        console.log("please enter the username");
        return       
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())




function calculateCartPrice1(...num2){      // this is rest operator in js which convert all the value/argument as a array
    return num2
}
// console.log(calculateCartPrice1(200,400,500,2000,3000,4000))


function calculateCartPrice(val1,v1l2, ...num1){      // this is rest operator in js which convert all the value/argument as a array
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000,3000,4000))

const user= {
    username: "umesh",
    price:181
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username: "Bobby",
    price:444
})

const mynewarray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,300,100,2300]));











