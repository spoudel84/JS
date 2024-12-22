/**
 * 1
 * 1  2 
 * 1  2  3 
 * 1  2  3  4
 * 1  2  3  4  5 
 * 
 * 
 * 1  2  3  4  5 
 * 1  2  3  4
 * 1  2  3 
 * 1  2 
 * 1
 */
for (let i = 1; i <= 10; i++) {
    let toPrint = '';

    for (let j = 1; j <= i; j++) {
        toPrint += j + '    ';
    }
    console.log(toPrint);
}
for (let i = 10; i >= 1; i--) {
    let toPrint = '';

    for (let j = 10; j >= i; j--) {
        toPrint += j + '    ';
    }
    console.log(toPrint);
}
// print multiplication table of 3

//for (let i = 1; i <= 20; i++) {
//sum = 3 * i;


// console.log("3 X", i.toString(), "=", sum.toString());
//console.log(`3 X ${i} = ${3 * i}`);
//}

// to print all the multiplication table

for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
    console.log("")
    console.log("")
}



