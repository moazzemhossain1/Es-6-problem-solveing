

const findUser=(users,id)=>{

    let excepedUsers=users.find(user =>{
        return user.id===id
    })
   if(!excepedUsers) {
    return "User not found "
   }
   else{
    return excepedUsers;
   }

}
let users = [
    {
        id: 1,
        name: "Rahim"
    },
    {
        id: 2,
        name: "Karim"
    },
    {
        id: 3,
        name: "Sadia"
    },
    {
        id: 4,
        name: "Nusrat"
    },
    {
        id: 5,
        name: "Hasan"
    }
];

console.log(findUser(users,99))


