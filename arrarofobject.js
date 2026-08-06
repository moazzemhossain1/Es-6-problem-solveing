

const findGreed=(status)=>{
    console.log(status);

    const Grread=(marks)=>{
        if(marks>=90){
            return "A+"
        }
        else if(marks>=80){
            return "A"
        }
        else if(marks>=60){
            return "B"
        }
        else{
            return "Filed"
        }
    }

    let Newstudents=students.map(student =>{
        let {name,marks}=student;
        const netOmbect={name,marks, greed:Grread(marks)}
    //    console.log(name,marks)
     return netOmbect;
    })
     return Newstudents;
    

}
let students = [
    {
        name: "Rahim",
        marks: 85
    },
    {
        name: "Karim",
        marks: 90
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

console.log(findGreed(students))