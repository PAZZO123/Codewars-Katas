var findAll=(array, n) =>array.reduce((acc,num,idx)=>{
  if(num===n){
  acc.push(idx)
}
  return acc;
},[])

