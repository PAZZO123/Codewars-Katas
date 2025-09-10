function divisors(integer) {
 let arr=Array.from({length:integer-2},(_,i)=>(i+1)+1).filter(n=>integer%n===0)
 return arr.length?arr:`${integer} is prime`
  
}