function capitalize(s){
  let oddCapital=[...s].map((n,i)=>i%2?n.toUpperCase():n).join('')
  let evenCapital=[...s].map((n,i)=>i%2===0?n.toUpperCase():n).join('')
  return [evenCapital,oddCapital];
};