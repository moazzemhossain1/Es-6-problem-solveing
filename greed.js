const getGreed=(marks)=>{
    // if(marks>=90){
    //     return "A+"
    // }else if(marks>=80){
    //     return "A+"
    // }
    // else if(marks>=60){
    //     return "B+"
        
    // }
    // else{
    //     return "Filed"g
    // }


    return typeof marks !="number"?"inviled": marks>=90?"A+":marks>=80?"A": marks>=60?"B":"Filed"

}
console.log(getGreed(90))