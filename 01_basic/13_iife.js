//Immediately Invoked Function Expression(IIFE)

// function chai(){
//     console.log(`db connected`);
    
// }
// chai()


(function chai(){
    console.log(`db connected`);
    
})();                             //end krne ke ; lgana pdta hai

(()=>{
    console.log(`db connected two`);
    
})();

((name)=>{
    console.log(`db connected two ${name}`);
    
})('vishal')