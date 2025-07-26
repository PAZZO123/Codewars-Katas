var arithmetic=(a, b, op)=>op==="add"?a+b:op==="subtract"?a-b:op==="multiply"?a*b:a/b
  
//test console
console.log(arithmetic(2,5,'add'))//7