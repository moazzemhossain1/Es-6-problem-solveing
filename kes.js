
const exsiveProducts=(product)=>{

    let keys=Object.keys(product);
    let higst=0;
    let higstProduct=""

    for(let key of keys){
        if(higst<product[key]){
            higst=product[key];
            higstProduct=key;
            
        }
        

    }
    // console.log(higst,higstProduct);
    return higstProduct;
    

}
console.log(exsiveProducts({pen:15,book:100,bag:150,bat:400}))