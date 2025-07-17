function oneCharDifference(s1, s2) {
  var k=0
  var count=0;
  var maxLength=s1.length>s2.length?s1.length:s2.length

 
   for(var i=0;i<maxLength;i++)
    {
     if(  s1.split('').includes(s2.charAt(i))){
       //console.log(s1.charAt(i))
      count ++ 
     }
                  }
     

  return maxLength===count+1 ||(count===maxLength && (s1.length===s2.length+1 ||s1.length+1===s2.length))
   }
   //test console
   console.log(oneCharDifference('grant', 'gant'))