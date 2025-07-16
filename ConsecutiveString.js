function longestConsec(strarr, k) {
  if (strarr.length===0 ||strarr.length<k||k<=0 ) return ""
  var n=0
  var arr=[]
  //access all element in the array
  //concatenanate every consecutive element up to kth element
  while(n<strarr.length){
    var sum=strarr.slice(n,(n+k)).join('')
   // console.log('hello')
    arr.push(sum)
    n++
    
  }
  var maxLength=0
  for(var i=0;i<arr.length;i++){
    if(arr[i].length>maxLength){
      maxLength=arr[i].length
    }
  }
  return arr.filter(n=>n.length===maxLength)[0]
}