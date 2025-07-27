function pipeFix(numbers){
  var n=numbers.sort((a,b)=>a-b)
  var result=[]
  for(var i=n[0];i<=n[n.length-1];i++){
    result.push(i)
  }
  return result

}
console.log(pipeFix([1,16]))/*[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15, 16
]