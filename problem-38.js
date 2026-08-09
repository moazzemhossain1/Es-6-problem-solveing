

const findUserById=(users,id)=>{
    // console.log(users,id)

    let findUser=users.find((user)=> user.id===id)
    return findUser;
    

}
const users=[
 {id:1,name:"Rahim"},
 {id:2,name:"Karim"},
 {id:3,name:"Sakib"}
];
console.log(findUserById(users,2))
console.log(findUserById(users,3))