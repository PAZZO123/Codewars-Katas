//?kyu
var findAverage=(array)=>array.length===0?0:array.reduce((sum,n)=>(sum+n),0)/array.length
//test
console.log(findAverage([1,2,3]))//2

//7 kyu version
var avg=(a)=>a.reduce((n,b)=>n+b,0)/a.length

//average using rest parameters
function average(...numbers) {
    return numbers.length?numbers.reduce((acc,n)=>acc+n,0)/numbers.length:0
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
