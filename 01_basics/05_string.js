const name="umesh"
const repoCount=50

console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('umesh-um-yhh')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('e'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,3)
console.log(anotherString);

const newStringOne="    umesh  "
console.log(newStringOne.trim());

const url = "https://umesh.com/bobby%20pandey"
console.log(url.replace('%20','-'));

console.log(url.includes('umesh'))

console.log(gameName.split('-'))



