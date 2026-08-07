
const getManagerName=(employee)=>{

     const {name,manager}=employee;
     return manager?.name;

}
 let employee= { name: "Mim", manager: { name: "Tanvir" } }
console.log(getManagerName(employee))