/**
 * Decision making statements
 * a. if-else statements
 * b. else-if statements
 * c. switch-case statements
 * d. loop
 * for example:
 */
let day = "monday";
if (day === 'sunday' || day === "saturday") {
    console.log("Holiday")
} else if (day === "friday") {
    console.log("Weekend");
} else {
    console.log('weekday');
}

// same code using switch

switch (day) {
    case "sunday":
    case "saturday":
        console.log("holiday")
        break;
    case "friday":
        console.log("weekend");
        break;
    default:
        console.log("weekday")

}

//##javascript program to calculat percentage of the student and division based on the same
// -Description: crate a varibale to store a number between 0 to 500
// -consider 500 as total value 
// - calculate percentage and assign to a varibale
// - get the division based on the following:
//     -percentage >=80 ====> division is: Distinction
//     -percentage >=60 but less than 80 ====> division is: First division
//     -percentage >=45 but less than 60 ====> division is: Second division
//     -percentage >=35 but less than 45 ====> division is: third division
//     -percentage <35 =====> division is: fail
//     -print the obtained division

const marksObt = 340;
const total = 500;
const per = marksObt / total * 100;
if (per >= 80) {
    console.log("Distinction");
}
else if (per >= 60) {
    console.log("First Division")
}
else if (per >= 45) {
    console.log("Second division")
}
else if (per >= 35) {
    console.log("Third Division")
}
else {
    console.log("failed")
}


//-------------------------------------------------------------------------

// # calculate electricity bill 
// - Upto 20 units lumsum amnt of npr 80
// - for next 30 unit npr 7.5 per unit
// - for next 50 units npr 8.6 per unit
// - for next 100 units npr 9.5 per unit
// - for any avobe 200 units npr 11 per unit


// let unitConsumed = 102;
// //let unitPrice=(20/80)*unitConsumed;
// if (unitConsumed <= 20) {
//     console.log("your billis rs. 80")
// }
// else if (unitConsumed >= 20 && unitConsumed <= 30) {
//     console.log(`your bill is ${(unitConsumed - 20) * 7.5 + 80}`)
// }
// else if (unitConsumed >= 30 && unitConsumed <= 50) {
//     console.log(`your bill is ${(unitConsumed - 20) * 8.6 + 80}`)
// }
// else if (unitConsumed >= 50 && unitConsumed <= 200) {
//     console.log(`your bill is ${(unitConsumed - 20) * 9.5 + 80}`)
// } 
// else {
//     console.log(`your bill is ${(unitConsumed - 20) * 11 + 80}`)
// }
let consumedUnit = 255;
let totalBill = 0;
if (consumedUnit <= 20) {
    totalBill = 80;
}
else if (consumedUnit <= 50) {
    totalBill = 80 + (consumedUnit - 20) * 7.5;
}
else if (consumedUnit <= 100) {
    totalBill = 80 + 30 * 7.5 + (consumedUnit - 50) * 8.6
}
else if (consumedUnit <= 200) {
    totalBill = 80 + 30 * 7.5 + 50 * 8.6 + (consumedUnit - 100) * 9.5
}
else {
    totalBill = 80 + 30 * 7.5 + 50 * 8.6 + 100 * 9.5 + (consumedUnit - 200) * 11;
}
console.log("total bill is:", totalBill);

/**
 * convert celcius to farhenheit and vice versa
 * c=>f
 * f=(celcius *9/5)+32
 * c=(farheinheit -32) *5/9
 */

const temp = 100 //F
let scale = "F" // F


// scale C ==> convert to Fahreinheit
// scale F ==> convert to Celcius
let convertedTemp = 0;
if (scale.toLowerCase() === 'f') {
    convertedTemp = (temp - 32) * 5 / 9;
    console.log("celcius:", convertedTemp)
}
else if (scale.toLowerCase() === "c") {
    convertedTemp = (temp * 9 / 5) + 32;
    console.log("Farheinheit:", convertedTemp);
}
else {
    console.log("Invalid Scale")
}


//------------------------------------------

const dayNumb = 0;
if (dayNumb === 0) {
    console.log("Sunday")
} else if (dayNumb === 1) {
    console.log("Monday")
}//...

// Switch case

switch (dayNumb) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    //..
    default:
        console.log("invalid number of day. plz enter between  to ")
        break; // optional  
}

