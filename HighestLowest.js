var highAndLow=(numbers)=>{
  var sorted=(numbers.split(' ').map(n=>parseInt(n)).sort((a,b)=>a-b))
  return [sorted[sorted.length-1],sorted[0]].join(" ") }
               
//test