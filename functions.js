// Methods, functions, events handler, taks
// functions is a code block that executes only after call
// a function can take anything as an imput, and return anything as an output
// == ways of writing function==
// 1) general way (primitive way)
// functin definition

//function printHello(){
// scope or body
//console.log("hellow there");
//return()
//}
//printHello();

//===SECOND WAY OF WRITIG FUNC===
//let printHelo=function(){
//  console.log("hello there")
//}

//===arrow function==

//  const printhello=()=>{
//     console.log("hello there")
//  }
//  printhello()

//====4TH WAY===
// Fnction can be assigned to object 
//eg:
// const user = {
//     printHello: function () {
//         console.log("hello there");
//     }
// }
// to call this function
// user.printHello();

const addNumbers = (a, b) => {
    const c = a + b;
    return c;
}
const results = addNumbers(10,20);

console.log(results);

/**
 * types of functions:
 * a. clouser
 * b. callback
 * 
 */




// const addNumbers=(a,b=0)=>{
//     const c=a+b;
//     return c;

// }
// const result=addNumbers(10);
// console.log(result);

// two types of scopes in js
//global scope example

// let x=10;
// let y=20;
// let z=null;
// const sumvalues=()=>{
// z=x+y;
// };
// sumvalues();
// console.log(z); //30

// write js function to get sum of the values of the array

const num1 = [2, 4, 6, 7, 9]
const getsum = (arr) => {
    let sum = 0;
    for (let numb of arr) {
        sum += numb;
    }
    return sum;
}
let resultsum = getsum(num1);
console.log(resultsum);
