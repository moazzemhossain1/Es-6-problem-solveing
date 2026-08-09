
const getProduvtPrices=(products)=>{
    // console.log(products)

    let mapProductsPrice=products.map((product)=>{
        // console.log(product.price)
        return product.price;
    })
   return mapProductsPrice;

}
const products = [
 {
   name:"Laptop",
   price:800
 },
 {
   name:"Mobile",
   price:500
 },
 {
   name:"Keyboard",
   price:100
 }
];
console.log(getProduvtPrices(products))