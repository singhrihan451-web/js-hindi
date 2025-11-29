// var a=300
let b =300

if (true) {
let a =10
const b=20
var c=30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="vishal"
    function two(){
        const website="linkdin"
        console.log(username);   
        console.log(website);   
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username="vishal"
    if(username==="vishal"){
        const website="linkdin"
    console.log(username +" "+ website);
    console.log(website);
    console.log(username);

    }
    // console.log(website);
    console.log(username);
}
// console.log(username);


// ****************interesting***************

function addone(num){
    return num+1
}
console.log(addone(5))



console.log(addone(5))
function addone(num){
    return num+1
}


// console.log(addtwo(7))
// const addtwo=function(num){          // this is hoisting that is not used function
//     return num+2
// }

const addtwo=function(num){
    return num+2
}
console.log(addtwo(7))