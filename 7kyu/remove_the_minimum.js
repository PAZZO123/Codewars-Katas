function removeSmallest(numbers) {
  const min=Math.min(...numbers)
  return numbers.filter((n,i,arr)=>i!==arr.indexOf(min))
}
//test cases