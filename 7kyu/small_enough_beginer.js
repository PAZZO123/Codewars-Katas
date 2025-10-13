const smallEnough=(a, limit)=>a.every(n=>n<=limit)
//test cases
console.log(smallEnough([1,2,3,4,5,5,6],3))
console.log(smallEnough([1,2,3,4,5,5,6],4))
console.log(smallEnough([1,2,3,4,5,5,6],4))