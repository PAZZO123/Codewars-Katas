function calculateYears(principal, interest, tax, desired) {
    var years=0
    while(principal<desired){
      var I=principal*interest
      var T=I*tax
      var netI=I-T
      principal+=netI
      years++
     
   
      
    }
  return years
}
//test  in console
console.log(calculateYears(100,0.7,0.3,27900))