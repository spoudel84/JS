const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//find the sum of all the numbers in that array
const sumArray = (numbArr) => {
    let sum = 0
    numbArr.forEach((val) => {
        sum += val;
    })
    return sum;
}
let sum = sumArray(numbs);
console.log(sum);
