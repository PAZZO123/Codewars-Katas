function alphabetPosition(text) {
  var result=[]
  
    for(var char of text.toLowerCase()){
      if(char>='a'&& char<='z'){
        
    result.push(char.charCodeAt(0)-96);
  }
        
      }
    
 
  return result.join(' ');
}
var alph=(text)=>text.toLowerCase().split('').map(a=>(a.charCodeAt(0)-96)).filter(a=>a>0 && a<27).join(' ');
console.log(alph("hello my manager"))