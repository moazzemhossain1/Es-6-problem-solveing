

const promoteEmployee=(employee, newTitle)=>{
    // console.log(employee,newTitle);

    let updateNewemploy={
        ...employee,
        title:newTitle,
    }
    return updateNewemploy;

    

}
let employee={
    name: "Rafi",
    title: "Junior Dev"
}
let newemploy=(promoteEmployee(employee,"senion dev"));
console.log(employee);
console.log(newemploy)