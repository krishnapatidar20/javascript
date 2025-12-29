const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        //console.log('Async tak is complete');
        resolve()
    },1000)
})

promiseOne.then(function () {
    //console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
      //  console.log("Async task 2");
        resolve()
    },1000)

}).then(function() {
    //console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve({username:"krishna", email:"krishna@gmail.com"})
      },1000)
})

promiseThree.then(function (user) {
    //console.log(user);
    
})


const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"krishna", password:"345678"})
        } else {
            reject('ERROR : Something went wrong')
        } 
    },1000)
})

promiseFour.then((user)=>{
   // console.log(user);
    return user.username
}).then((username)=>{
    //console.log(username);
    
}).catch(function(error){
    //console.log(error);
    
}).finally(()=>
    console.log("the promise is either resolved or rejected")
)




const promiseFive = new Promise((resolve, reject) => {
setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"krish", password:"3678"})
        } else {
            reject('ERROR : jjj went wrong')
        } 
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
    
}

consumePromiseFive()