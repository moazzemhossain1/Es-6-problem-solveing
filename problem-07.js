
let numbers=[100, 250, 75];

const sumAllPrices=(numbers)=>{
    // console.log(numbers)
    let sum=0;

    for(let number of numbers){
        sum=sum+number;

    }
    return sum;

}
console.log(sumAllPrices(numbers))