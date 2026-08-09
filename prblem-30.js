const products = [
 {name:"Laptop", category:"Electronics"},
 {name:"Mobile", category:"Electronics"},
 {name:"Shirt", category:"Fashion"},
 {name:"Pant", category:"Fashion"},
 {name:"Book", category:"Education"}
];

let gropingCountProducts=products.reduce((acc , product)=>{
    let key=product.category;
    if(!acc[key]){
        acc[key]=0
    }
    acc[key]++;
    return acc
},{})
console.log(gropingCountProducts)