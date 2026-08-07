

const applyGreed=(students,thrwoble)=>{

    let filterStudensts=students.filter(student =>{
        // console.log(student)
        if(student.marks>=thrwoble){
            return true
        }
        else{
            return false
        }
    })
    return filterStudensts;


}

let students = [
    {
        name: "Rahim",
        marks: 85
    },
    {
        name: "Karim",
        marks: 92
    },
    {
        name: "Sadia",
        marks: 78
    },
    {
        name: "Nusrat",
        marks: 95
    },
    {
        name: "Hasan",
        marks: 88
    }
];

console.log(applyGreed(students,80))
console.log(applyGreed(students,90))
console.log(applyGreed(students,95))