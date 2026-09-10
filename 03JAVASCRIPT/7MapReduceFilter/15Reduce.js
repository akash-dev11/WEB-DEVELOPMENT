
const number = [1,2,3,4]

// const total = number.reduce(function (acc,currval){
//     // console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const total = number.reduce( (acc,curr) => acc + curr , 0)
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const pricePay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(pricePay)