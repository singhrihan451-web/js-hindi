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




//*******************Operation***************//
let value =3
let negValue =-value
//console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1="hello"
let str2=" vishal"
let str3=str1+str2
console.log(str3);   //hello vishal

console.log("1" +2);       //12
console.log(1 +"2");       //12
console.log("1" +2+2);       //122
console.log(1 +2 +"2");          //32

console.log((3+4)*5% 3);

console.log(true);    //true
console.log(+true);      //1
console.log(+"");       // 0

let num1,num2,num3
num1= num2 =num3=2+2

let gamecounter =100
gamecounter++;
console.log(gamecounter);