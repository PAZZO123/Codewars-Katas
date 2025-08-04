const findAverage=(nums)=> nums.reduce((acc,el)=>acc+el,0)/nums.length
  
//test cases
console.log(findAverage([1, 2, 3, 4, 5])); // 3
console.log(findAverage([10, 20, 30])); // 20
console.log(findAverage([5, 15, 25, 35]));