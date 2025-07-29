const sumOfMinimums=(arr)=> arr.reduce((acc,el)=>acc+el.sort((a,b)=>a-b)[0],0)

//test console
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))