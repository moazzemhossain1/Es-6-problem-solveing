
const products = [
  { name:"Laptop", category:"Electronics", price:50000 },
  { name:"T-shirt", category:"Fashion", price:1000 },
  { name:"Mobile", category:"Electronics", price:20000 },
  { name:"Shoes", category:"Fashion", price:3000 },
  { name:"Book", category:"Education", price:500 }
];

let gropingProducts=products.reduce((acc, product)=>{
    let key=product.category;
    if(!acc[key]){
        acc[key]=[];

    }
    acc[key].push(product);
    return acc;
},{})
console.log(gropingProducts)