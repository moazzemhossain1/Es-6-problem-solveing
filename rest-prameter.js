
function calculetTotle(discount,...prices){
    // console.log(prices);
    let totle=0;

    for(let price of prices){
        // console.log(price)
        totle=totle+price;
        // console.log(totle)
       
        //  console.log(totle)
         let discountPrice=(totle* discount)/100;
          minePrice=totle-discountPrice
       
    }
    return minePrice;
   

}
let amount=calculetTotle(10,100,200,300,400,500,700);
console.log(amount)