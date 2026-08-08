
// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
// Input: 
// [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
// Output:
//  [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]



const sortByPriceAscending=(products)=>{
    //  console.log(products)

    let products2=[...products];
    // console.log("products--->",products)

    let sortProducts=products2.sort((fristProduct,secondProduct)=>{
        return fristProduct.price-secondProduct.price
        
       
    })
    return sortProducts;

}
let products=[{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
console.log(sortByPriceAscending(products))