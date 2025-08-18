function moveZeros(arr) {
  let zeros=arr.filter(n=>n===0)
  let nonZeros=arr.filter(n=>n!==0)
  return [...nonZeros ,...zeros]
}

//test cases
console.log(moveZeros([0,0,0,0,0,1,202,3030,"june",false,3,4,4,5,5,5,4,0,0,0,0,0,0,true]))/*[
  1, 202, 3030, 'june', false,
  3, 4,   4,    5,      5,
  5, 4,   true, 0,      0,
  0, 0,   0,    0,      0,
  0, 0,   0,    0
]

*/