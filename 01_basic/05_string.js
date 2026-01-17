

const name ="vishal"
const repocount =50

  // console.log(name+""+ repocount+"" +"value");

 //console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename =new String('vishal-savita')    // new keyword used to reference of object to string
console.log(gamename);

// console.log(gamename[2]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.toLowerCase());


// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('s'));
const newString =gamename.substring(2,4)       // print--vish  0-4 then 4 are not included same as well as slice method
console.log(newString);                         // does'nt contain negative value start from the 0 index

const anotherString =gamename.slice(2,4)    // cantain negative value
console.log(anotherString);

// const newstringone ="   vishal   "
// console.log(newstringone);
// console.log(newstringone.trim());


// const url ="https://vishal@20.com"
// console.log(url.replace('@20','-'));
// console.log(url.includes('sundar'));   // find this string is available in url that reply for true and false

console.log(gamename.split('-'));     // all string break into substring part in single string with (, - any symbol)
console.log(gamename.split(','));     // all string break into substring part in single string with (, - any symbol)





