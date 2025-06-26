function deleteNth(arr, n) {
  const counts = {};
  const result = [];

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    
    if (counts[num] <= n) {
      result.push(num);
    }
  }

  return result;
}
console.log( deleteNth([1,2,3,3,3,3,2,2,2,4,4,5,5,5,5,],1));//[ 1, 2, 3, 4, 5 ]