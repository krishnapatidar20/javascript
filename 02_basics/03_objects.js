// singleton
// object.create


// objects literals


const mySym = Symbol("key1")

const Jsuser = {
    name: "krishna",
    "full Name": "krishna patidar",
    [mySym]: "mykey1",
    age: 19,
    location: "Indore",
    email: "k@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.location);
console.log(Jsuser["email"]);
console.log(Jsuser["full Name"]);
//console.log(Jsuser.full Name); //wrong
console.log( Jsuser[mySym]);


Jsuser.email = "p@mail.com"
Object.freeze(Jsuser)
Jsuser.email = "kkk@mail.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello ");
    
}

Jsuser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

