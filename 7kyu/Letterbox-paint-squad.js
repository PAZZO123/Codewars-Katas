var paintLetterboxes = function(start, end) {
  let result=Array(10).fill(0)
  for(let i =start; i<=end;i++){
    [...String(i)].forEach((n)=>result[n]++)
  }
  return result
}
// test cases
console.log(paintLetterboxes(125, 132))