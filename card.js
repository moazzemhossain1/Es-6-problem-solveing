
const cretaCardeGenetate=(products)=>{
    // console.log(products)
    let totleQuntyte=0;
    let totlePrice=0;

    for(product of products){
        // console.log(product.name)
        totleQuntyte+=product.quantity;
        totlePrice=totlePrice+(product.price*product.quantity)
    }
    return`Totle :${totleQuntyte} items, ${totlePrice} Taka`

}
let products = [
    {
        name: "Laptop",
        price: 80000,
        quantity: 5
    },
    {
        name: "Mobile Phone",
        price: 25000,
        quantity: 10
    },
    {
        name: "Headphone",
        price: 3000,
        quantity: 15
    },
    {
        name: "Keyboard",
        price: 1500,
        quantity: 20
    },
    {
        name: "Mouse",
        price: 800,
        quantity: 25
    }
];

console.log(cretaCardeGenetate(products));