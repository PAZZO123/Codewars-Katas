const twoOldestAges=(ages)=>ages.sort((a,b)=>a-b).slice(ages.length-2)
//test cases
console.log(twoOldestAges([2,3,4,5,6,7,8]))