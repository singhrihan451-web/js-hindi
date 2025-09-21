const acoountId=12345
let acoountEmail="vishal.com"
var accountPassword="12563"
accountCity="delhi"
let accountState;

// accountId=2 //not allowed

acoountEmail="bghs@.com"
accountPassword="245698"
accountCity="pune"


console.table([acoountId,acoountEmail,accountPassword,accountCity,accountState]);


/*
prefer not to use var
because of issue in block scope anf functional scope


var->> variable can be re-declared & updated a global scope variable.
Let->> variable cannot be re-declared but can be updated.A block scope variable.

const->> variable cannot be re-declared or updated ,A block scope variable.
*/
