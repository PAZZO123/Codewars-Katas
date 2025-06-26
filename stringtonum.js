function toNumberArray(stringarray){
  var num=[]
  for(var i=0;i<stringarray.length;i++){
    var number=Number(stringarray[i]);
    num.push(number);
  }
  return num;
}