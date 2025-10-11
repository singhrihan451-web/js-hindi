// const tinderuser =new object()     //singleton object
const tinderUser ={}                  //non-singleton object

tinderUser.id ="123abc"
tinderUser.name="sammy"
tinderUser.issloggedin=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vishal",
            lastname:"savita"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3 ={obj1,obj2}
// const obj3= Object.assign({},obj1,obj2)


const obj3 ={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"vk@gmail.com"
    },
    {
        id:2,
        email:"vk@gmail.com"
    },
    {
        id:3,
        email:"vk@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('issloggedin'));
// console.log(tinderUser.hasOwnProperty('islogged'));




const course ={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"vishal"
}

const {courseinstructor}=course
console.log(courseinstructor);

const {courseinstructor:instructor}=course              // object ko decode krna
console.log(instructor);

// {
//     "name":"vishal",
    // "coursename":"js",               json aise create krte hai
//     "price":"free"
// }

[
    {},
     {},                      //arraay form me json
]