const multiTable=(n)=>[...Array(10)].map((_,i)=>`${i+1} * ${n} = ${(i+1)*n}`).join('\n')
// //test console
console.log(multiTable(10))