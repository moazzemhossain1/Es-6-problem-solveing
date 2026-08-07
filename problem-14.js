

const getExcenpiceItemTotle=(cards,mainMan)=>{
    // let totle=0;

    // for(let products of cards){
    //     // console.log(products,mainMan)
    //     if(products.price>=mainMan){
    //         totle+=products.price+products.quantity;
    //     }
    // }
    // return totle

//  useing array method


//    let filterProducts=cards.filter((procuct) =>{ 
//     return procuct.price>=mainMan
// })

// let mapProducts=filterProducts.map((produ) =>{
//     return produ.price+produ.quantity;
// })

// let sumRudec=mapProducts.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue;
// },0)
// return(sumRudec)


// chinge array method 

let totle=cards 
             .filter((procuct) => procuct.price>=mainMan)
             .map((product) => product.price+product.quantity)
             .reduce((accumulator,currentvalue)=> accumulator+currentvalue ,0)
             return totle;

 
  
  

}
let products = [
    {
        name: "Laptop",
        price: 80000,
        quantity: 5
    },
    {
        name: "Smartphone",
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

console.log(getExcenpiceItemTotle(products,1000))