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
