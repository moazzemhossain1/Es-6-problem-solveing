

const destiringExameple=(obj)=>{

    const {user :{name:userName,age=18}}=obj
    return{
        userName,age
    }

}
console.log(destiringExameple({user:{name:"Rafi",age:22}}))