// example
// loop in array
const products = [
    {
        name: "product one",
        price: 1234,
        discount: 10 // in percentage
    },
    {
        name: "product two",
        price: 1000,
        discount: 10 // in percentage
    },
    {
        name: "product three",
        price: 4423,
        discount: 15 // in percentage
    }

]
// find each discount amount 
// find eact product amount after discount price
// and assign to the product itself
console.log(products);

let disAmount = 0;
let afterDiscount = 0;

for (let i = 0; i < products.length; i++) {
    disAmount = products[i].price * products[i].discount / 100;
    afterDiscount = products[i].price - disAmount;
    products[i].discount = disAmount;
    products[i].afterDiscount = afterDiscount;

}
console.log(products);

// for-in, for-of loop
// next topic:
// functions
// custome functions
// clouser functions
// callback function
// promoses and async-await
// these are important

