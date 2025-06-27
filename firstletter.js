function abbrevName(name){
  var name=name.split(' ')
  var result="";
  for (let x=0;x<name.length;x++){
    result+=name[x].charAt(0).toUpperCase();
  }
return result.split("").join(".");
//this will return first letter of each word captalized with . in btn
}