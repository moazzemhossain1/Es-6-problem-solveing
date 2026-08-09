

const getExpensiveProducts=(products)=>{
    // console.log(products)

    let filterProducts=products.filter((product)=>{
        if(product.price>=200){
            return true;
        }
        else{
            return false;
        }
    })
    return filterProducts;

}
const products=[
 {name:"Laptop",price:900},
 {name:"Mouse",price:50},
 {name:"Monitor",price:300},
 {name:"Keyboard",price:120}
];
console.log(getExpensiveProducts(products))