function getCount(str) {
  var vowels=['i','a','e','o','u'];
  var str=str.toLowerCase().split("")
  
  var count=0
  for(var i=0;i<str.length;i++){
  
    if(vowels.includes(str[i])){
      count++
    }
  }
  return  count;
}
