// async
setTimeout(() => {
    //body
    console.log("only executes after 3 seconds")
}, 3000);
setTimeout(() => {
    console.log("I am after first output but before 3 second")
}, 2000);

console.log("i am first output");
console.log("i am second output");
//========clock====

setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    let clock = hour + ":" + minute + ":" + sec;
    document.getElementById('clock').innerHTML = clock

}, 1000)

