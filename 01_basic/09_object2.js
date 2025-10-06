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

const obj3 ={obj1,obj2}
console.log(obj3);
