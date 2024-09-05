// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num); 
}

const greetings="hello world"
for (const g of greetings){
    console.log(` ${g}`);
    
}

// Maps 

const map=new Map()
map.set('IN',"India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
    
}

const myObject={
    game1: "NFS",
    game2 :"spiderman"
}

// for(const [key,Value] of myObject){
//     console.log(key,':-',Value)
// }