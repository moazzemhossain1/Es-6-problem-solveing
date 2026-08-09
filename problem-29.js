
const employees = [
 {name:"A", department:"IT", salary:50000},
 {name:"B", department:"HR", salary:40000},
 {name:"C", department:"IT", salary:60000},
 {name:"D", department:"Sales", salary:30000}
];


let gropingEmployess=employees.reduce((acc,employee)=>{
    let key=employee.department;
    if(!acc[key]){
        acc[key]=[];
        

    }
    acc[key].push(employee)
        
    
    return acc

},{})
console.log(gropingEmployess)