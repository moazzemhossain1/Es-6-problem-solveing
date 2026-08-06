let array1=[10,20,30,40,40];
let array2=[40,60,80,10];
let marjeArray=[...array1,...array2];
console.log(marjeArray)
let useSet=[...new Set(marjeArray)];
console.log(useSet)