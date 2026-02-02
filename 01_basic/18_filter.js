// const coding=["js","py","fr","ck"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
    
// })
// console.log((values));           // for each loop value ko return ya vapas nhi krta

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newnums= myNums.filter((num) => num > 4)              //filter value ko vapas krta hai

// const newnums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


const books=[
    {
        title:'book one',
        genre:'history',
        publish:1995,
        edition:1989
    },
    {
        title:'book two',
        genre:'history',
        publish:2006,
        edition:1989
    },
    {
        title:'book three',
        genre:'biology',
        publish:2005,
        edition:1989
    },
    {
        title:'book four',
        genre:'python',
        publish:2004,
        edition:1989
    },
];
// let userbooks= books.filter((item)=> item.genre==='history')
// userbooks= books.filter((item)=>{return item.publish>=2000 && item.genre==="history"} )
// console.log(userbooks);



// ********* MAP function*************

const mynumbers =[1,2,3,4,5,6,7,8,9,10]

// const mynum=mynumbers.map((num)=> num+10)
// const mynum=mynumbers.map((num)=> {return num+10})
// console.log(mynum);


// ************chaining******
const newnums =mynumbers
// .map((num)=> num*10+1)
// .map((num)=> num*10)
// .map((num)=> num+1)
// .filter((num)=>num >=40)
// console.log(newnums);



// **********Reduce********

const mynums=[1,2,3]
// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// },0)
// console.log(mytotal);

// const mytotal=mynums.reduce((acc,currval)=> acc+currval,0)
// console.log(mytotal);


const shoppingcart =[
    {
      itemname:"js course",
      price:2999  
    },
    {
        itemname:"py course",
        price:1999
    },
    {
        itemname:"ck course",
        price:1950
    }
]
const pricetopay=shoppingcart.reduce((acc,item)=> acc+item.price,0)
 
console.log(pricetopay);
