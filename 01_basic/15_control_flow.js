//if

// if(2==="2"){
//     console.log("executed");
// }
// if(2!=3){
//     console.log("executed");
// }

// const isuserloggedIn=true
// const temperature=41

// if(temperature<50){
//     console.log("less than 50");   
// }else{
// console.log("temerature is greater than 50");
// }
// console.log("executed");

// const score=200
// if(score>100){
//     const power="fly"                             //const variable lga hai to neeche vala console nhi print hoga
//     console.log(`user power:${power}`);            //if mention the var keyword then print outside the console log

// }
// console.log(`user power:${power}`);

// const balance =1000
// if(balance>500) console.log("test") ;     //implicit scope      

// const balance=850
// if (balance<500) {
//     console.log("less than 500");   
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }

// const userloggedin=true
// const  debited=true
// const loggedinfromgoogle=false
// const loggedinfromemail=true

// if(userloggedin && debited &&2==3){
//     console.log("allow to buy corse");
    
// }
// if(loggedinfromemail || loggedinfromgoogle){
//     console.log("user logged in");
    
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3             //"string value"
// switch (month) {
//     case 1:                      //case "january":
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("month does'nt match");
//         break;
// }



// *****************truthy and falsy value***********


// const useremail="bishal@gamil.com"      //true
// const useremail={}                      //false
// const useremail=[]                      //true

// if (useremail) {
//     console.log("got user email");
// } else{
//     console.log("dont have user email");
// }

//falsy values

// false,0 ,-0, bigint 0n, "", null, undefined,NaN

//truthy values

// "0",'false', " ", [],{}, function(){}



// const useremail=[]  
// if(useremail.length===0){
//     console.log("array is empty");
    
// }


// const emptyobj={}

// if(Object.keys(emptyobj).length===0){
//     console.log("object is empty");
// }

// false==0    //true
// false==''    //true
// 0==''         //true


//Nullish Coalescing operator(??) : null undefined

// let val1;
// val1=5??10             //5
// val1 = null??10          //10
// val1 = undefined ?? 15      //15
// val1 = null ? 10 ?? 15         //10

// console.log(val1);

//ternary operator

//condition ? true : false

const iceTeaprice =100
iceTeaprice>=80 ?console.log("less than 80") : console.log("more than 80");




