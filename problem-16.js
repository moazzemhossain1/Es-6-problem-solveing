
const sortedDesinding=(numbers)=>{
    console.log(numbers)
    let number=[...numbers]
    // console.log(number)
    let sortNumber=number.sort((a,b)=>{
        return b-a;
    })
    return sortNumber;

}
let numbers=[3,5,10,25,2,37];
console.log(sortedDesinding(numbers))