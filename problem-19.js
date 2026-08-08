
// Task 3: findProductByName(products, name) — find() 
// Given an array of product objects, return the first product matching the given name, or undefined if not found.
// Input: 
// products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 
// Output: 
// { name: "Bag", price: 500 }


const findProductByName=(products, name)=>{
    // console.log(products)

    let findProduct=products.find((product)=>{
         if(product.name===name){
            return product.name;
       }
        else{
             return "not found!"
       }
    })
     return findProduct.name;

}
let products= [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }];
console.log(findProductByName(products,"Bag"))


