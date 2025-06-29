function alphabetPosition(text) {
  var result=[]
  
    for(var char of text.toLowerCase()){
      if(char>='a'&& char<='z'){
        
    result.push(char.charCodeAt(0)-96);
  }
        
      }
    
 
  return result.join(' ');
}
console.log(alphabetPosition("hello my manager"))