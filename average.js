//?kyu
var findAverage=(array)=>array.length===0?0:array.reduce((sum,n)=>(sum+n),0)/array.length
//test
console.log(findAverage([1,2,3]))//2

//7 kyu version
var avg=(a)=>a.reduce((n,b)=>n+b,0)/a.length