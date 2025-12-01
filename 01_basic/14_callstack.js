//   javascript execution context
// 1- global execution context     // global environment
// 2- functional execution context
// 3- eval execution context


// {} ---> memory creation phase
//         execution phase

function one(){
    console.log("one")
    two() 
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()
