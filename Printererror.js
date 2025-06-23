function printerError(s) {
  //getting length of string
  //counting charcters that are in range a-m
  //counting characters that are out of range n-z
 // var characters=/^[a-m]$/i;
  var count=0;
  for(let x=0; x<s.length;x++){
    if(/*!characters.test(s[x])*/ s[x]>'m'){
      count ++; }
    }
      console.log(count)
    
    // your code
    return count+'/'+s.length;
}
console.log(printerError("gdhgshsjskxsnxnbnbcnb"));