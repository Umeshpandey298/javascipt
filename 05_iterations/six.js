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


// const newNums=[]
// mynums.forEach((num)=>{
//     if (num>4){
//         newNums.push(num)
//     }

// })
// console.log(newNums)


const books =[
    {
        title:'book One', genre:'friction',publish: 1981,edition:2004
    },
    {
        title:'book two', genre:'non-friction',publish: 1992,edition:2008
    },
    {
        title:'book three', genre:'history',publish: 1999,edition:2007
    },
    {
        title:'book four', genre:'non-friction',publish: 1989,edition:2010
    },
    {
        title:'book five', genre:'science',publish: 2009,edition:2010
    },
    {
        title:'book six', genre:'friction',publish: 1987,edition:2010
    },
    {
        title:'book seven', genre:'history',publish: 1986,edition:1996
    },
    {
        title:'book eight', genre:'science',publish: 2011,edition:2016
    }
];

let userBooks=books.filter((bk)=> bk.genre==='history')
 userBooks=books.filter((bk)=>{return bk.publish>=2000})
 userBooks=books.filter((bk)=>bk.publish<=1995 && bk.genre==='history')
console.log(userBooks)