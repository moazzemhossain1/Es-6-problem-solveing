

// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
// Input: 
// products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
// Output: 144




const getDiscountedTotalForCategory=(products, category)=>{
    // console.log("products ---->",procuets, "category---->",category)

    let totle=products
    .filter((prodect)=> prodect.category===category)
    .map((prodect)=>prodect.price- prodect.price*0.10 )
    .reduce((accumulate,value)=> accumulate+value,0)
    return totle;

}
let procuets=[{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" ;


console.log(getDiscountedTotalForCategory(procuets,category))
