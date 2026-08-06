

const colculetShipinFie=(orderAmount,shipingFee=60)=>{
    if(orderAmount>=1000){
        return "Free Shpping"
    }
    else{
        return`shippin Fee: ${shipingFee} Taka`
    }

}
console.log(colculetShipinFie(1200))
console.log(colculetShipinFie(500))
console.log(colculetShipinFie(500,100))