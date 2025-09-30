// const score =400
// console.log(score);                           //400

// const balance=new Number(100)               
// console.log(balance);                           // number:100

// console.log(balance.toString().length);              //3
// console.log(balance.toFixed(2));                    //100.00

// const othername = 123.8966
// console.log(othername.toPrecision(3));                  //124
// console.log(othername.toPrecision(4));                  //123.9

// const hundreds =100000
// console.log(hundreds.toLocaleString('en-IN'));                //10,00,000


//************************maths************ */
 
console.log(Math);
console.log(Math.abs(-4));            //4
console.log(Math.round(4.6));          //5
console.log(Math.ceil(4.2));              //5
console.log(Math.floor(4.9));            //4
console.log(Math.min(4,3,5,2));          //2
console.log(Math.max(4,9,6,5));            //9

console.log(Math.random());               //0.589658968              
console.log(Math.random()*10);              //1.3659456

const min=10
const max=20

console.log(Math.random() * (max-min+1) )

console.log(Math.floor(Math.random() * (max-min+1) ) +min);
