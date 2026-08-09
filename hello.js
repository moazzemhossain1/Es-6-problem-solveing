

let users={
  name: "Moazzem",
  age: 22,
  profession: "Developer",
  city: "Singapore"
}

const createUserProfile=(user)=>{
    // console.log(user)

    return`naem:${user.name}
age:${user.age} 
professinon:${user.profession}
City:${user.city}`

}
let user=createUserProfile(users);
console.log(user)