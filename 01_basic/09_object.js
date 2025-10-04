// singleton
// object.create


// object literals

const mysym =Symbol("key1")

const jsuser ={
    "full name":"vishal savita",
    mysym:"mykey1",
    [mysym]:"mykey1",

    name:"vishal",
    age: 18,
    location: "kanpur",
    email: "vihan@com",
    isloggin: false,
    lastlogindays: ["monday","saturday"]

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"])
// console.log(jsuser.mysym);
// console.log(typeof jsuser.mysym)
// console.log(jsuser[mysym]);
// console.log(typeof jsuser[mysym]);

// jsuser.email ="vishal@com"              //email change krni ho

// Object.freeze(jsuser)
// jsuser.email ="vishal@gmail.com"
// console.log(jsuser);

jsuser.greeting =function(){
    console.log("hello js user");
    
}


jsuser.greetingTwo =function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

