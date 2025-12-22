// "this" keyword refers to current context

const user = {
    username: "krishna",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);
        console.log(this);
        
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

/*
function chai(){
    let username = "krishna"
    console.log(this.username);
    
}

chai()
*/
/*
const chai =  function(){
    let username = "krishna"
    console.log(this.username);
    
}
*/

const chai = () => {
    let username = "krishna"
    console.log(this);
}   

// chai()

/*
const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(3,4));
*/

//const addtwo = (num1, num2) =>  num1 + num2
//const addtwo = (num1, num2) =>  (num1 + num2) 
// const addtwo = (num1, num2) => { num1 + num2 }  // not possible we have to write return when we use {}

const addtwo = (num1, num2) =>  ({username: "krishna"})

console.log(addtwo(3,4));