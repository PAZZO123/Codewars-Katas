var elimination=(arr)=>arr.find((el,i)=>arr.indexOf(el)!==i)||null
  
//test cases
console.log(elimination([2,5,34,1,22,1]))//1
console.log(elimination([2,5,34,22,1]))//null
