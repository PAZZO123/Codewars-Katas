var sum= (numbers) =>(numbers.reduce((sum,n)=>sum+n,0));
  
//tests
var num=[1,3,4,5,-5];
console.log(sum(num));