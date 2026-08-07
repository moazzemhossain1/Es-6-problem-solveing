
let numbers= [10, 20, 30, 40]
const  splitFirstRest=(arr)=>{
   const [first,...rest]=arr
   return{
    "first":first,
    "rest":rest,
   }
    
} 
console.log(splitFirstRest(numbers))