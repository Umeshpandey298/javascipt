// for 



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }



// console.log("element");


/*                                   printing the table from 2 to 20                */ 
// for (let j = 2; j < 21; j++) {

//     console.log(`                             Table of : ${j}`);
//     for (let i = 1; i <=10; i++) {
//         // console.log(`Inner loop value ${i} and inner loop ${j}`);//
//         console.log(`${j} X ${i} = ${i*j}`);
    
//     }    
// }

// let myArray =["flash","batman","superman"]
// // console.log(myArray.length);
// for (let index = 0; index < myArray.length; index) {
//     const element = myArray[index];
//     // console.log(element);   
// }


// break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("detected 5");
        continue;
    }
    console.log(`the value of i is ${i}`);
}

