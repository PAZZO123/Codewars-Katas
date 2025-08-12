function multiplicationTable(size) {
  let array=Array.from({length:size},(_,i)=>i+1)
  let result=[]
  for(let i=1;i<=array.length;i++){
    result.push(array.map(n=>n*i))
  }
  return result
}
