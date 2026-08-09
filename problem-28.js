
const orders = [
  { id:1, customer:"Rahim", status:"Delivered" },
  { id:2, customer:"Karim", status:"Pending" },
  { id:3, customer:"Jamal", status:"Delivered" },
  { id:4, customer:"Sohan", status:"Cancelled" }
];

let gropingOrders=orders.reduce((acc,order )=>{
    let key=order.status;
    if(!acc[key]){
        acc[key]=[]
    }
    acc[key].push(order)
    return acc;

},{})
console.log(gropingOrders)