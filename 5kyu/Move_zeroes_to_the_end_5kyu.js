function moveZeros(arr) {
  let zeros=arr.filter(n=>n===0)
  let nonZeros=arr.filter(n=>n!==0)
  return [...nonZeros ,...zeros]
}