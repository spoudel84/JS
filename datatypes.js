/**
 * PRIMITIVE DATA TYPES
 * a. string / text
 * "",``,
 * b. Number 
 * 123,12.1,1e3
 *      integer , number , float
 * c. boolean (true or false)
 * d. Null (emppty data)
 *    let nulldata=""--string null data
 * e. undefined---example (let b;)
 * these five datatypes are called primitive data types
 *  NON PRIMITIVE DATATYPE
 *  a. Array 
 *  -is a collection of data
 *  - stored in index-value pair
 *  - index are self assigned and always starts from 0
 *  -
 * 
 */
//array example
// let arr = [1, 2, 3, 4, 5, 6,];
// console.log(arr[0]);

// const allProducts = [
//     ["Mobile", "Samsung", 78000],
//     ["tv", "sony", 125000]
// ]
// for (let i of allProducts) {
//     console.log(i);
// }
// console.log(allProducts[0][1]);
// console.log(allProducts[1][0]);

// allProducts.push(["iron", "panasonic", [2500]]);
// allProducts.unshift(["watch", "casio", 5600]);
// allProducts.splice(2, 0, ["headpone", "apple", 98000]);
// allProducts[3] = [9, 2, 9];
// console.log(`your item is:${allProducts[0]} brand name is :${allProducts[1]}, cost is Rs:${allProducts[2]}`);



// let b; // undefined
// console.log(typeof b);
// let c = null; // null
// console.log(typeof c);
// let a = 1e3 // exponential value
// let boolean = true; // boolean
// let nullData = ''; // null

//object practice
// const productobj = {
//     productName: "Iphone 12",
//     brand: "Apple",
//     price: 128000,
//     discount: 10,
//     stock: 2
// }
// const arrkeys = Object.keys([productobj]);
// const arrValues = Object.values(productobj);
// const allProductsObj = [
//     {
//         productName: "iPhone 12",
//         brand: "Apple",
//         price: 128000,
//         discount: 10,
//         stock: 2
//     },
//     {
//         productName: "iPhone 12",
//         brand: "Apple",
//         price: 128000,
//         discount: 10,
//         stock: 2
//     }
// ]
// console.log(productobj.productName);
// console.log(productobj.price);
// console.log(productobj.discount);
// console.log(productobj.stock);

//functions as a data type
//example
const numb1 = [1, 4, 5, 2, 3, 57, 8, 2, 1]
const setObj = new Set(numb1) //unique value

console.log(setObj)
const Symbol = Symbol()
const user1Obj = {
    [Symbol]: "value",
    key: "Updated Value"
}
console.log(user1Obj); // {key:""}
//userObj.key="New value";

//Git
// git (global version controlling tool)

