//send function as an argument to other function
const func1 = (cb) => {
    cb()

}

const func2 = () => {
    console.log("I am in function 2")
}
func1(func2);

//eg. of callback function

// login access

const login=(email,password, accessfunc)=>{
    // token
    accessfunc()
}
const validateLogin=(email,password,cb,accessDb)=>{
    //validaton
    // email should be of email format and password is required
    // if validation pass login
    cb(email,password,accessDb)
    // else user inform credential does not match
}
const dashboard=()=>{
    console.log("welcome to dashboard");
}
//
const email="admin@admin.com"
const password="admin123";

validateLogin(email,password,login,dashboard)
// login(email,password)

// using callback function one time only

const test1=()=>{
    console.log("i am in test 1")
}
test1 (()=>{
console.log("i am a callback function");
});


