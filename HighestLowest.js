var highAndLow=(numbers)=>{
  var sorted=numbers.split(' ').map(n=>parseInt(n))//.sort((a,b)=>a-b))
  return `${Math.max(...sorted)} ${Math.min(...sorted)}` //[sorted[sorted.length-1],sorted[0]].join(" ") 
  }
               
//test
console.log(highAndLow('5 -7 -9 -10 3 4 5 6 7 8'))