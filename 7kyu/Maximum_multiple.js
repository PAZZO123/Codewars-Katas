const maxMultiple=(d, b)=>Array.from({length:b},(_,i)=>i+1).sort((a,b)=>b-a).find(n=>(n%d===0))
//test cases
console.log(maxMultiple(2,7))//->6