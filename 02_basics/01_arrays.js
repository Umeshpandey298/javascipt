//  Arrays

const myArr=[0,1,2,3,4,5,6]
const myHeros=["shaktiman","naagaraj"]
const myArr2=new Array(1,2,3,4)

// console.log(myArr[1])


// Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.pop()
// myArr.unshift(8)
// myArr.shift()
// console.log(myArr.includes(6))
// console.log(myArr.indexOf(6))
// console.log(myArr)
// const newArr=myArr.join()    // join methed is convert the array in string and join it also
// console.log(myArr)
// console.log(newArr)


// slice,splice

console.log("A",myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)
