function pipeFix(numbers){
  var n=numbers.sort((a,b)=>a-b)
  var result=[]
  for(var i=n[0];i<=n[n.length-1];i++){
    result.push(i)
  }
  return result

}