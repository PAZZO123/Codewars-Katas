// function multiTable(number) {
//   // good luck
//   let result=[]
//   for(let i=1;i<=10;i++){
//     result.push(`${i} * ${number} = ${i*number}`)
// }
//   return result.join('\n')
// }

const multiTable=(n)=>[...Array(10)].map((_,i)=>`${i+1} * ${n} = ${(i+1)*n}`).join('\n')