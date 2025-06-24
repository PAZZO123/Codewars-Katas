function XO(str) {
    //count the number of x
  var str=str.toLowerCase();
  var xcount=0;
  var ocount=0;
  for(var i=0;i<str.length;i++)
    {
      if(str[i]==="x"){
        //console.log(str[i]);
        xcount++;
      }
      else if(str[i]==="o"){
        ocount++;
      }
    }

  return ocount===xcount;
}
console.log(XO('xxxxoooo'));