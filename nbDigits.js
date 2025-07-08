function nbDig(n, d) {
  var count =0;
    for(var i=0;i<=n;i++){
      var k=(i**2).toString()
     for(var digit of k) {
         if(digit===d.toString()){
        count ++
      }
     }
      
    }
 return count
}