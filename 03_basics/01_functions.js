

function sayMyName() {
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");

} 


//sayMyName()

//sayMyName => for reference
//sayMyName() => for execution


//function addTwoNumbers(num1, num2) {
  //  console.log(num1 + num2);
    
//}

//function addTwoNumbers(num1, num2) {
  //  let result = num1 + num2
    //return result
//}

function addTwoNumbers(num1,num2){
    return num1+num2
}

const result = addTwoNumbers(5,5)

//console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
             console.log("please enter the user name");
             return
    }
    return `${username} just logged in`
}

function loginUserMessage(username){
    if(!username){
             console.log("please enter the user name");
             return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("krishna"))
//console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 600, 800, 1000));


const user = {
    username: "krishna",
    price: 3999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)


const newArray = [100, 200, 300, 400]

function returSecondValue(a){
    return a[1]
}

console.log(returSecondValue(newArray));
