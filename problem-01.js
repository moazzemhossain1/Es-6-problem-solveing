

const calculateBill=(amount, taxRate = 0.05)=>{
    // console.log(amount);
  let  textAmount=amount*taxRate;
    // console.log(textAmount);
  let  finallAmount=amount+textAmount;
    return finallAmount;


}
console.log(calculateBill(1000))
console.log(calculateBill(1000,0.10))