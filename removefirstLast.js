function removeChar(str){
 var str =str.split('');
  str.shift();
  str.pop();
  return str.join('');

};
//return str.slice(1,-1)