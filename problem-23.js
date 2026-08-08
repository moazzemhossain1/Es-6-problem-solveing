
//  applyBonusPoints(users, bonus) — Pass by Reference vs Value 
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
// Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
// Output: [{ name: "Rafi", points: 25 }]
//  (original array's object must still have points: 20)


const applyBonusPoints=(users, bonus)=>{
     console.log(users,bonus)
    // let spradeUsers=[...users]
    // console.log(spradeUsers);
    let mapUsers=users.map((user)=>{
        return {
            ...user,
            "points":user.points+bonus,
        }
    })
    return mapUsers;

}
let users=[{ name: "Rafi", points: 20 }], bonus = 5
console.log(applyBonusPoints(users,bonus))