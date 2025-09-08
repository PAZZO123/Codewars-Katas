function removeSmallest(numbers) {
  const min=Math.min(...numbers)
  return numbers.filter((n,i,arr)=>i!==arr.indexOf(min))
    // return new Set(str.toLowerCase()).size == str.length;
}
//test cases
console.log(removeSmallest([1,2,3,4,6]))//1