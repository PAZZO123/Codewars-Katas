var maxSequence = function(arr){
  let current=0,max=0
  for(let n of arr){
     current=Math.max(0,current+n)
    max=Math.max(max,current)
  }
  return max
}
//test console
console.log(maxSequence([1,2,3,-1,-6,7,3]))