
const createLiveUpdate=()=>{
    let lives=3;

    return ()=>{
        if(lives>0){
            lives--;
        }
        return lives;
    }
}

let karimLiveUpdat=createLiveUpdate();
console.log(karimLiveUpdat())
console.log(karimLiveUpdat())
console.log(karimLiveUpdat())

let RahimLiveUpdate=createLiveUpdate();
console.log(RahimLiveUpdate())