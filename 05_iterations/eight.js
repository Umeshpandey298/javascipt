const myNums=[1,2,4]
// const myTotal=myNums.reduce(function (acc,curval) {
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc+ curval
// },4 )

// console.log(myTotal);

const myTotal=myNums.reduce((acc,cur)=>{ return acc+cur

},9)

console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price: 888
    },
    {
        itemName:"python course",
        price:444,

    },
    {
        itemName:"data scientist course",
        price:999
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price , 0)
console.log(priceToPay)

