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

// USING FOR LOOP
//-------------------
let disAmount = 0;
let afterDiscount = 0;

for (let i = 0; i < products.length; i++) {
    disAmount = products[i].price * products[i].discount / 100;
    afterDiscount = products[i].price - disAmount;
    products[i].discount = disAmount;
    products[i].afterDiscount = afterDiscount;

} console.log(products);

// ===USING FOR-IN LOOP===//
//--------------------

for (let i in products) {
    let product = products[i];

    let dis = product.price * product.discount / 100;
    let afterDis = product.price - dis;
    product.discountAmount = dis;
    product.afterDiscount = afterDis;
}
console.log(products);

//===== USING-OF LOOP======//

for (let product of products) {
    let dis = product.price * product.discount / 100;
    let afterDis = product.price - dis;
    product.discountAmount = dis;
    product.afterDiscount = afterDis;
}
console.log(products);







