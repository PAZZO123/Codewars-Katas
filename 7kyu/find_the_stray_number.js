const stray=(numbers)=>numbers.filter(n=>numbers.indexOf(n)===numbers.lastIndexOf(n))[0]
//test cases
console.log(stray([1,2,2,2,2,2,2,]))