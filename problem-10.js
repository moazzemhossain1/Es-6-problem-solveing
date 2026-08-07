
let numbers= [10, 20, 30, 40]
const cloneAndUpdate=(arr, index, newValue)=>{
    console.log(arr)
    let newArray=[...arr];
    newArray[index]=newValue;
    return newArray;


}
console.log(cloneAndUpdate(numbers,2,100))