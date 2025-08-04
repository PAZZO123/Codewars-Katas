const  findDeletedNumber=(arr, mixArr) =>arr.find((el)=>!mixArr.includes(el))||0

//test cases
console.log(findDeletedNumber([1, 2, 3], [1, 2])); // 3
console.log(findDeletedNumber([1, 2, 3], [1, 2, 3])); // 0

  
