const orders = [
  { id: 101, customer: "Rahim", status: "Delivered" },
  { id: 102, customer: "Karim", status: "Pending" },
  { id: 103, customer: "Jamal", status: "Delivered" },
  { id: 104, customer: "Sohan", status: "Cancelled" },
  { id: 105, customer: "Rafi", status: "Pending" }
];


let gropingOrders=orders.reduce((acc , order)=>{
    let key=order.status;
    if(!acc[key]){
        acc[key]=[];
    }
    acc[key].push(order);
    return acc;

},{})
console.log(gropingOrders);

let countProductGroping=orders.reduce((acc , order)=>{
    let key=order.status;
    if(!acc[key]){
        acc[key]=0;
    }
    acc[key]++;
    return acc;

},{})
console.log(countProductGroping)