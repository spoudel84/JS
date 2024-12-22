// promise
// fullfilled or reject
// object data type
// rosolve and reject
// create and manage
// handle
//  settlement
// asynchronous nature of js
//db
//connect async
//time 
//pending

const prom = new Promise((resolve, reject) => {
    // takes time to execute
    let output = true;
    if (output) {
        resolve("hello i am resolve") // end of promise

    } else {
        reject("i am recected from promise")
    }
})

// console.log(prom)
/// then catch

prom.then((resData) => {
    console.log(resData)
    // console.log ("i am last statement")


}).catch((exception) => {
    console.log("exception : ", exception)
}).finally(() => {
    console.log("i am last statement")
});
