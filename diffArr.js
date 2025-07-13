var findDifference=(a, b) =>{
  var prod1=a.reduce((m,n)=>m*n,1)
  var prod2=b.reduce((m,n)=>m*n,1)
  return prod1<prod2?prod2-prod1:prod1-prod2
}
  
//grassopper terminal game
var move= (position, roll) =>roll*2+position
//test
findDifference(move([1,2,3],[3,4,5]),8)
  
