const minValue=(values)=>+[...new Set(values)].sort((a,b)=>a-b).join('')
//test cases
console.log(minValue([1,3,1]))//->13
