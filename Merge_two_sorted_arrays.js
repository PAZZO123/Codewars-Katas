var  mergeArrays=(arr1, arr2)=>[...new Set(arr1.concat(arr2).sort((a,b)=>a-b))]
//test
console.log(mergeArrays([6,4,4,5,6],[9,0,1,2,3]))//[0, 1, 2, 3,4, 5, 6, 9]