//  Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log( typeof myDate);

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let myCreateDate1=new Date(2023,0,23,5,3)
console.log(myCreateDate1.toLocaleString());

let myCreateDate2=new Date("01-14-2023")
console.log(myCreateDate2.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreateDate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());


