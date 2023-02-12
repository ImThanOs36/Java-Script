var a = 'hellow';
var a = 'hello';     //we can redefine 'a' with var 

let b = 'hii';
// let b = 'hello';    // we cant redefine 'b' with let

{
    let b = 'hello';
    console.log(b);             // but we can declear b at another scop

}


const c =5;                         //we cant change value of const
c =6;
// const a =6;
//       ^

// SyntaxError: Identifier 'a' has already been declared
