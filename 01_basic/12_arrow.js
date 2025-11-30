const user={
    username: "vishal",
    price:99,
    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
    }
    
    
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);


// function one(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// o
// one()



const one =()=>{
    let username="vishal"
    console.log(this.username);
}
// one()


// const addtwo = (num1,num2)=>{                      //explicit return
//     return num1+num2
// }
// const addtwo = (num1,num2)=>num1+num2            //implicit return

// const addtwo = (num1,num2)=> (num1+num2) 
    
const addtwo = (num1,num2)=> ({username:"vishal"})    

console.log(addtwo(4,5));



