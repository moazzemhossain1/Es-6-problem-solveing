

const students = [
  { name: "Rahim", class: "10", marks: 80 },
  { name: "Karim", class: "9", marks: 75 },
  { name: "Jamal", class: "10", marks: 90 },
  { name: "Sohan", class: "8", marks: 85 },
  { name: "Rafi", class: "9", marks: 70 }
];

const gropingStudents=students.reduce((acc,student)=>{
    let key=student.class;
    if(!acc[key]) {
        acc[key]=[];
    }
    acc[key].push(student);
    return acc;
},{})
console.log(gropingStudents)