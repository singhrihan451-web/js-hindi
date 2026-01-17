//date 
let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);                  //object


// let myCreatedDate =new Date(2025,0,23)        //month start from the 0
// let myCreatedDate =new Date(2025,0,23,5,3)              // date+time
// let myCreatedDate =new Date("2025-01-02")
let myCreatedDate =new Date("02-12-2025")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);


`${newDate.getDay()} and the time`

let mydate = newDate.toLocaleString('default',{
    weekday:'long'
})
console.log(mydate);



