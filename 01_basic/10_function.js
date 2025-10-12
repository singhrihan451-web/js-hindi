function myname(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}
// myname()

// function addtwonumber(num1,num2){
//     console.log(num1+num2);
    
// }
// addtwonumber(3,4)
// addtwonumber(3,"4")
// addtwonumber(3,"a")

function addtwonumber(num1,num2){
    // let result =num1 +num2
    // console.log("vishal");             //return ke phle hai to print hoga 
    // return result
    // console.log("vishal");          //return ke baad hai to print nhi hoga

    return num1 +num2
}

const result =addtwonumber(3,5)
// console.log("result:",result);

function loginusermessage(username){
    if(username === undefined){              // if(!username)  ye likh sakte hai
        // console.log("please enter a username");
        
    }
    return `${username} just logged in`
}
// console.log(loginusermessage("vishal"));
// console.log(loginusermessage());




function calculateprice(val1, val2, ...num1){             //print-->> 400,500            //... means restoperator ye saare number ko array me daal deta hai ek sath
    return num1
}
// console.log(calculateprice(200,300,400,500));

const user ={
    username :"vishal",
    price : 200

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user);
handleobject({
    username:"sam",
    price:399
})


const mynewarray =[200,300,400]
function returnvalue(getarray){
    return getarray[1]
}
// console.log(returnvalue(mynewarray));
console.log(returnvalue([200,500,1000,5000]));
