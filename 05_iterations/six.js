// const coding =["js","rb","py","java","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=mynums.filter((num)=>{
//       return num>4
// })


const newNums=[]
mynums.forEach((num)=>{
    if (num>4){
        newNums.push(num)
    }

})
console.log(newNums)