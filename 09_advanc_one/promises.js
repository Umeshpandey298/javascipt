const promiseOne = new Promise(function(resolve,reject){
    // do an aync task
    // db calls, cryptograph,network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)  
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree =new Promise(function(resolve,reject){
    setInterval(function(){
        resolve({username:"umesh",
            email:"umeshexample@gmail.com"
        })

    },600)

})

promiseThree.then(function(user){
    console.log(user)

})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:'umesh pandey',password:'12345'})
        }
        else{
            reject('ERROR: something went wrong')
        }

    },1200)

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((My_username)=>{
    console.log(My_username);
}).catch(function(err){
    console.log(err)
}).finally(()=> console.log('the promise is either resolve or rejected'))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"promises",password:"javascript"})

        }else{
            reject(console.log("ERROR: promises went wrong"))
            
        }

    },1200)
})

async function consumePromiseFive() {
    try{
        const response= await promiseFive
        console.log(response)

    }catch(error){
        console.log(error)
    }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try{
//         const response=await fetch('https://randomuser.me/api/')
//         // console.log(response);
        
//         const data= await response.json()
//         console.log(data)
        
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()



fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err)
)