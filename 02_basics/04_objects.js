// (singleton object) => const tinderUser = new Object() === (non singleton) => const tinderUser = {}

const tinderUser = {}

tinderUser.id = "123qwe"
tinderUser.name = "krish"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "k@gmail.com",
    fullname: {
        userfullname: {
            firstname: "krishna",
            lastname: "patidar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


