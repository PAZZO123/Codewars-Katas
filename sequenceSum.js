const sequenceSum = (begin, end, step) => {
  var n=Math.floor(((end-begin)/step)+1)
  var sum= n/2*(2*begin+(n-1)*step)
  return sum<=0?0:sum
}

console.log(sequenceSum(2,12,2))