

// Task 4: getTotalStockValue(products) — reduce() 
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
// Input:
//  [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
// Output: 400



const getTotalStockValue=(procuets)=>{
    // console.log(procuets)

    let sumProdect=procuets.reduce((accumelater,crrentvaleu)=>{
        return accumelater+crrentvaleu.price*crrentvaleu.stock;

    },0)
    return sumProdect;

}
let products=[{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
console.log(getTotalStockValue(products))