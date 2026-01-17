// primitive datatype----(call by value)

//7 types: String,number, Boolean, null, undefined, symbol, bigint

const score =100
const scorevalue=100.3

const isloggedIn =false
const outsideTemp =null
console.log(typeof outsideTemp);      // ans--object
let userEmail;

const id= Symbol('123')
const anotherId =Symbol('123')              //typeof---symbol
console.log(id===anotherId);


const bignumber =345628n

//Reference (Non primitive)

// Array, Objects , Functions
 const heros =["shaktiman", "pookie"];
 let myobj ={
    name :"vishal",
    age:22,
 }

 const myfunction =function(){
    console.log("hello world");

 }



 //**************************************//

 // stack (primitive), heap (non-primitive)

 let myname="vishal"

 let anothername =myname
 anothername="rihan"

 console.log(myname);            //vishal
 console.log(anothername);         //rihan
 
 let userone ={
    email:"user@vn.com",
    upi:"user@ybl"
 }

 let userTwo =userone

 userTwo.email ="vishal.com"
 console.log(userone.email);
 console.log(userTwo.email);
 
 