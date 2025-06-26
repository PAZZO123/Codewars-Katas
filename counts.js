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
