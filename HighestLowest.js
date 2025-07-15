var highAndLow=(numbers)=>{
  var sorted=numbers.split(' ').map(Number)
  return `${Math.max(...sorted)} ${Math.min(...sorted)}` 
  }
               
//test
console.log(highAndLow('5 -7 -9 -10 3 4 5 6 7 8'))