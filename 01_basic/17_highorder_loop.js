// for of loop

// ["","",""]    array ke andar String
// [{},{},{}]     array ke andar Object

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting="hello world"
// for(const greet of greeting){
//     console.log(`each char is ${greet}`);
    
// }

//maps

// const map= new Map()
// map.set('IN',"india")
// map.set('FR',"france")
// map.set('USA',"united state of america")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key,':-',value); 
// }
//  const myobject ={
//     'game1':'nfs',
//     'game2':'spiderman'
//  }
//  for (const [key, value] of myobject) {
//     console.log(key,':-',value); 
//  }

// ************** for in loop*************

const myobject={
   js:'javascript',
   cpp:'c++',
   rb:"ruby",
   swift:"swift by apple"
}
for (const key in myobject) {
   // console.log(myobject[key]);
   // console.log(`${key} shortcut is for ${myobject[key]}`);
   
}


// const programming =["js","rb","py","java","cpp"]
// for (const key in programming){
//    // console.log(key);
//    console.log(programming[key]);
// }

// const map= new Map()
// map.set('IN',"india")
// map.set('FR',"france")
// map.set('USA',"united state of america")

// for (const key in map){
//    console.log(key);                            //map itertable nhi hai kuch print nhi hoga
   
// }

// ************ for each loop***************

 const coding = ["js","ruby","java","python","cpp"]

//  coding.forEach( function (item){
//    console.log(item);
   
//  } )

// coding.forEach((val)=>{
//    console.log(val);
   
// })

// function printme(item){
//    console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//  console.log(item,index,arr);
 
// })

const mycoding=[
   {
      languagename:"javascript",
      languagefilename:"js"
   },
   {
      languagename:"python",
      languagefilename:"py"
   },
]
mycoding.forEach((item) => {
   console.log(item.languagename);
    
});