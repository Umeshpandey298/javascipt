// var c=300
let a= 300

if(true){
    let a=10
    const b= 20
    console.log("inner:",a)
}
// console.log(a)
// console.log(b)



function one(){
    const username="umesh"

    function two(){
        const website ="youtube"
        console.log(username);
        // console.log(website);
    }
    // console.log(website);
    two();
}
// one();


if (true){
    const username="umesh"
    if (username==="umesh"){
        const website=" youtube"
        console.log(username + website)

    }
    // console.log(website)


}

// console.log(username)


// =========================================interesting===========================================



console.log(addone(5))

function addone(num){
    return num +1
}



// addtwo(5)                    //  it cause a error because we call the assign function before the assigning this function


const addtwo=function(num){
    return num+2
}
// console.log(addtwo(5))



