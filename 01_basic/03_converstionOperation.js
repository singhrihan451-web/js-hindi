// let score=33    //let score=null ---output-0   //let score=undefined--output-NaN  booleanvalue--true and false  1/0
// console.log(typeof score);         //number
// console.log(typeof(score));         //number


let score="33abc"
console.log(typeof score);            //string
let valueInNumber=Number(score)
console.log(typeof valueInNumber);       // number
console.log(valueInNumber);              //nan

//"33"=>33
//"33abc =>NaN"
//true => 1;  false=> 0

let isLoggedIn=1      // ""empty than ans--false   "name"--ans =true
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn);               //ans--true

//1=> true; 0=>false
//""=> false
//"name" =>true

let someNumber =33
let stringNumber =String(someNumber)
console.log(stringNumber);                  //  33
console.log( typeof stringNumber);          //  33  string