const myNums = [1,2,3]
/*
const myTotal = myNums.reduce(function (acc,CV) {
    console.log(`acc: ${acc} and CV: ${CV}`);
    
    return acc + CV
}, 0)
*/


const myTotal = myNums.reduce( (acc,CV) => acc+CV, 0)

//console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "cpp course",
        price: 4999
    },
    {
        itemName: "python course",
        price: 5999
    },
]


const price = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(price);
