function fakeBin(x){
  var y =x.toString().split('');
  //console.log(y);
  for(var i=0; i<y.length;i++){
    if(y[i]<5){
      y[i]='0';
    }
    else{
      y[i]='1';
    }
    //console.log(y[i])
  }
//console.log(y.join(''));
  return(y.join(''));
}
console.log(fakeBin(2344567898));