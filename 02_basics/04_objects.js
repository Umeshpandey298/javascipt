// const tinderUser=new Object()  // this is singleton object in js
const tinderUser= {}
tinderUser.id="123abc"
tinderUser.name="umesh pandey"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser = {
    email:"asdf@gmail.com",
    fullname:{
        firstname:"umesh",
        lastname:"pandey",
    }
}

console.log(regularUser.fullname)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"a",6:"b"}

const obj4=Object.assign({},obj1,obj2,obj3)   // this asssign() is used for the concatinate the object
console.log(obj4);

const obj5={...obj1,...obj2}  // this is also used for the concatination the two or more object by the spread operator in javascript
console.log(obj5)

const users=[
    {
        id:1,
        email:"umsh@gmail.com",
    },
    {
        id:1,
        email:"umsh@gmail.com",
    },
    {
        id:1,
        email:"umsh@gmail.com",
    },
    {
        id:1,
        email:"umsh@gmail.com",
    },
    {
        id:1,
        email:"umsh@gmail.com",
    },

]

users[1].email
console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); //convert each key/value in a object in a array 

console.log(tinderUser.hasOwnProperty('isLoggedI'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"umesh",
}

// console.log(course.courseInstructor)

// const {courseInstructor }= course
// console.log(courseInstructor)

const {courseInstructor :instructor}= course
console.log(instructor);

// API

// {
//     "name":"umesh",
//     "coursename": "js in hindi",
//     "price":"free"

// }




