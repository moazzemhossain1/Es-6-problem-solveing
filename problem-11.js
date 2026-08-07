

const ApplyDiscount=(prices,discountRate=0)=>{

    let afterDiscount=prices.map((ele,ind,arr)=>{
        // console.log(ele,ind)
          discountAmount=ele-(ele*discountRate)/100;
           return discountAmount;
        
        
       

    })
    console.log(afterDiscount)
   
    

}
let prices=[500,1000,200,400,700];
console.log(ApplyDiscount(prices,10))